// appointments.js - Σύστημα Ημερολογίου Ραντεβού για Καφεμαντεία
console.log("appointments.js loaded successfully!");
class AppointmentSystem {
    constructor() {
        this.currentDate = new Date();
        this.selectedDate = null;
        this.selectedTime = null;
        this.initializeSystem();
    }

    initializeSystem() {
        this.createAppointmentTab();
        this.initializeCalendar();
        this.loadUserAppointments();
        this.setupEventListeners();
    }

    createAppointmentTab() {
        // Προσθήκη καρτέλας ραντεβού στο μενού
        const tabsContainer = document.querySelector('.tabs');
        if (tabsContainer && !document.querySelector('[data-tab="appointment-tab"]')) {
            const appointmentTab = document.createElement('button');
            appointmentTab.className = 'tab';
            appointmentTab.setAttribute('data-tab', 'appointment-tab');
            appointmentTab.innerHTML = '<i class="fas fa-calendar-alt"></i> Ραντεβού';
            tabsContainer.appendChild(appointmentTab);
        }

        // Δημιουργία περιεχομένου καρτέλας
        const mainElement = document.querySelector('main');
        if (mainElement && !document.getElementById('appointment-tab')) {
            const appointmentContent = document.createElement('section');
            appointmentContent.id = 'appointment-tab';
            appointmentContent.className = 'tab-content';
            appointmentContent.innerHTML = this.getAppointmentHTML();
            mainElement.appendChild(appointmentContent);
        }
    }

    getAppointmentHTML() {
        return `
            <div class="form-section">
                <h2><i class="fas fa-calendar-alt"></i> Ζωντανή Καφεμαντεία μέσω Ραντεβού</h2>
                
                <div class="appointment-section">
                    <div class="info-box">
                        <p><strong>Πληροφορίες για τα ραντεβού:</strong></p>
                        <ul>
                            <li>Διαθέσιμες ώρες: Δευτέρα - Παρασκευή, 10:00-14:00 & 17:00-21:00</li>
                            <li>Διάρκεια ραντεβού: 30 λεπτά</li>
                            <li>Κάθε ραντεβού απαιτεί επιβεβαίωση από τον διαχειριστή</li>
                            <li>Μπορείτε να ακυρώσετε το ραντεβού έως 2 ώρες πριν</li>
                        </ul>
                    </div>
                    
                    <div class="calendar-container">
                        <div class="calendar-header">
                            <div class="calendar-nav">
                                <button class="calendar-nav-btn" id="prevMonth">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button class="calendar-nav-btn" id="nextMonth">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                            <div class="current-month" id="currentMonth"></div>
                        </div>
                        
                        <div class="calendar-grid" id="calendarGrid">
                            <!-- Ημερολόγιο θα προστεθεί δυναμικά -->
                        </div>
                        
                        <div class="time-slots-container" id="timeSlotsContainer" style="display: none;">
                            <div class="time-slots-title">
                                <i class="fas fa-clock"></i> Διαθέσιμες Ώρες για <span id="selectedDateText"></span>
                            </div>
                            <div class="time-slots-grid" id="timeSlotsGrid">
                                <!-- Ώρες θα προστεθούν δυναμικά -->
                            </div>
                        </div>
                        
                        <div class="appointment-form" id="appointmentForm" style="display: none;">
                            <div class="appointment-details">
                                <div class="appointment-summary">
                                    <div class="summary-item">
                                        <span class="summary-label">Ημερομηνία:</span>
                                        <span class="summary-value" id="summaryDate"></span>
                                    </div>
                                    <div class="summary-item">
                                        <span class="summary-label">Ώρα:</span>
                                        <span class="summary-value" id="summaryTime"></span>
                                    </div>
                                    <div class="summary-item">
                                        <span class="summary-label">Τύπος:</span>
                                        <span class="summary-value">Ζωντανή Καφεμαντεία</span>
                                    </div>
                                    <div class="summary-item">
                                        <span class="summary-label">Διάρκεια:</span>
                                        <span class="summary-value">30 λεπτά</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="appointment-notes"><i class="fas fa-sticky-note"></i> Σημειώσεις (προαιρετικά):</label>
                                <textarea id="appointment-notes" name="notes" placeholder="Σημειώσεις ή ερωτήσεις που θέλετε να συζητήσετε κατά τη διάρκεια της καφεμαντείας..."></textarea>
                            </div>
                            
                            <button type="button" class="submit-btn" id="bookAppointmentBtn">
                                <i class="fas fa-calendar-check"></i> Κλείσιμο Ραντεβού
                            </button>
                            
                            <div class="message" id="appointmentMessage"></div>
                        </div>
                    </div>
                    
                    <div class="appointments-list" id="appointmentsList">
                        <h3><i class="fas fa-list"></i> Τα Ραντεβού Μου</h3>
                        <div id="userAppointments">
                            <!-- Τα ραντεβού του χρήστη θα προστεθούν δυναμικά -->
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    initializeCalendar() {
        this.updateCalendar();
        
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.updateCalendar();
        });
        
        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.updateCalendar();
        });
        
        document.getElementById('bookAppointmentBtn').addEventListener('click', () => this.bookAppointment());
    }

    setupEventListeners() {
        // Προσθήκη event listener για την καρτέλα ραντεβού
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-tab="appointment-tab"]')) {
                this.loadUserAppointments();
            }
            
            // Χειρισμός ακυρώσεων ραντεβού
            if (e.target.closest('.cancel-btn')) {
                const appointmentId = parseInt(e.target.closest('.cancel-btn').getAttribute('data-id'));
                this.cancelAppointment(appointmentId);
            }
        });
    }

    updateCalendar() {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        // Ενημέρωση τίτλου
        const monthNames = ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος",
            "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"];
        document.getElementById('currentMonth').textContent = `${monthNames[month]} ${year}`;
        
        // Δημιουργία ημερολογίου
        const calendarGrid = document.getElementById('calendarGrid');
        calendarGrid.innerHTML = '';
        
        // Προσθήκη ημερών εβδομάδας
        const dayNames = ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"];
        dayNames.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day-header';
            dayElement.textContent = day;
            calendarGrid.appendChild(dayElement);
        });
        
        // Πρώτη ημέρα του μήνα
        const firstDay = new Date(year, month, 1);
        // Τελευταία ημέρα του μήνα
        const lastDay = new Date(year, month + 1, 0);
        // Ημέρα της εβδομάδας της πρώτης ημέρας
        const firstDayOfWeek = firstDay.getDay();
        
        // Προηγούμενου μήνα
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        
        // Προσθήκη ημερών προηγούμενου μήνα
        for (let i = firstDayOfWeek - 1; i >= 0; i--) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day other-month';
            dayElement.innerHTML = `<div class="day-number">${prevMonthLastDay - i}</div>`;
            calendarGrid.appendChild(dayElement);
        }
        
        // Τρέχον μήνας
        const today = new Date();
        for (let day = 1; day <= lastDay.getDate(); day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            const date = new Date(year, month, day);
            
            // Έλεγχος αν είναι σήμερα
            if (date.toDateString() === today.toDateString()) {
                dayElement.classList.add('today');
            }
            
            // Έλεγχος διαθεσιμότητας (Δευτέρα-Παρασκευή)
            const dayOfWeek = date.getDay();
            if (dayOfWeek === 0 || dayOfWeek === 6) { // Κυριακή ή Σάββατο
                dayElement.classList.add('unavailable');
            }
            
            dayElement.innerHTML = `<div class="day-number">${day}</div>`;
            
            // Προσθήκη event listener
            if (!dayElement.classList.contains('unavailable')) {
                dayElement.addEventListener('click', () => this.selectDate(date));
            }
            
            calendarGrid.appendChild(dayElement);
        }
        
        // Επόμενος μήνας
        const totalCells = 42;
        const remainingCells = totalCells - (firstDayOfWeek + lastDay.getDate());
        for (let day = 1; day <= remainingCells; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day other-month';
            dayElement.innerHTML = `<div class="day-number">${day}</div>`;
            calendarGrid.appendChild(dayElement);
        }
    }

    selectDate(date) {
        this.selectedDate = date;
        this.selectedTime = null;
        
        // Επαναφορά επιλογών
        document.querySelectorAll('.calendar-day').forEach(day => {
            day.classList.remove('selected');
        });
        
        // Επισήμανση επιλεγμένης ημερομηνίας
        const dayElements = document.querySelectorAll('.calendar-day');
        const selectedIndex = Array.from(dayElements).findIndex(day => {
            const dayNumber = day.querySelector('.day-number').textContent;
            const dayDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), parseInt(dayNumber));
            return dayDate.toDateString() === date.toDateString() && !day.classList.contains('other-month');
        });
        
        if (selectedIndex !== -1) {
            dayElements[selectedIndex + 7].classList.add('selected');
        }
        
        // Εμφάνιση διαθέσιμων ωρών
        this.showTimeSlots(date);
    }

    showTimeSlots(date) {
        const dateString = date.toLocaleDateString('el-GR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        document.getElementById('selectedDateText').textContent = dateString;
        document.getElementById('timeSlotsContainer').style.display = 'block';
        document.getElementById('appointmentForm').style.display = 'none';
        
        // Διαθέσιμες ώρες: 10:00-14:00 & 17:00-21:00, κάθε 30 λεπτά
        const morningSlots = this.generateTimeSlots(10, 14);
        const eveningSlots = this.generateTimeSlots(17, 21);
        const allSlots = [...morningSlots, ...eveningSlots];
        
        const timeSlotsGrid = document.getElementById('timeSlotsGrid');
        timeSlotsGrid.innerHTML = '';
        
        // Φόρτωση κλεισμένων ραντεβού
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        const bookedSlots = appointments
            .filter(apt => apt.date === date.toISOString().split('T')[0] && apt.status !== 'cancelled')
            .map(apt => apt.time);
        
        allSlots.forEach(slot => {
            const slotElement = document.createElement('div');
            slotElement.className = 'time-slot';
            slotElement.textContent = slot;
            
            // Έλεγχος αν η ώρα είναι κλεισμένη
            if (bookedSlots.includes(slot)) {
                slotElement.classList.add('unavailable');
            } else {
                slotElement.addEventListener('click', () => this.selectTime(slot, slotElement));
            }
            
            timeSlotsGrid.appendChild(slotElement);
        });
    }

    generateTimeSlots(startHour, endHour) {
        const slots = [];
        for (let hour = startHour; hour < endHour; hour++) {
            slots.push(`${hour.toString().padStart(2, '0')}:00`);
            slots.push(`${hour.toString().padStart(2, '0')}:30`);
        }
        return slots;
    }

    selectTime(time, element) {
        this.selectedTime = time;
        
        // Επαναφορά επιλογών
        document.querySelectorAll('.time-slot').forEach(slot => {
            slot.classList.remove('selected');
        });
        
        // Επισήμανση επιλεγμένης ώρας
        element.classList.add('selected');
        
        // Εμφάνιση φόρμας κλεισίματος ραντεβού
        this.showAppointmentForm();
    }

    showAppointmentForm() {
        document.getElementById('summaryDate').textContent = 
            this.selectedDate.toLocaleDateString('el-GR', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        document.getElementById('summaryTime').textContent = this.selectedTime;
        
        document.getElementById('appointmentForm').style.display = 'block';
    }

    bookAppointment() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            this.showMessage('Παρακαλώ συνδεθείτε για να κλείσετε ραντεβού.', 'error');
            return;
        }
        
        const notes = document.getElementById('appointment-notes').value;
        
        if (!this.selectedDate || !this.selectedTime) {
            this.showMessage('Παρακαλώ επιλέξτε ημερομηνία και ώρα.', 'error');
            return;
        }
        
        // Δημιουργία αντικειμένου ραντεβού
        const appointment = {
            id: Date.now(),
            userId: currentUser.id,
            userEmail: currentUser.email,
            userName: currentUser.name,
            date: this.selectedDate.toISOString().split('T')[0],
            time: this.selectedTime,
            duration: '30 λεπτά',
            type: 'Ζωντανή Καφεμαντεία',
            notes: notes,
            status: 'pending',
            createdAt: new Date().toISOString()
        };
        
        // Αποθήκευση ραντεβού
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        
        // Δημιουργία ειδοποίησης για τον διαχειριστή
        const adminNotifications = JSON.parse(localStorage.getItem('adminNotifications') || '[]');
        adminNotifications.push({
            type: 'appointment',
            userEmail: currentUser.email,
            userName: currentUser.name,
            date: appointment.date,
            time: appointment.time,
            notes: appointment.notes,
            appointmentId: appointment.id,
            createdAt: new Date().toISOString(),
            status: 'pending'
        });
        localStorage.setItem('adminNotifications', JSON.stringify(adminNotifications));
        
        this.showMessage('Το ραντεβού σας καταχωρήθηκε επιτυχώς! Θα λάβετε email επιβεβαίωσης μόλις εγκριθεί από τον διαχειριστή.', 'success');
        
        // Επαναφορά φόρμας
        this.resetAppointmentForm();
        
        // Ενημέρωση λίστας ραντεβού
        this.loadUserAppointments();
        
        // Ενημέρωση ημερολογίου
        this.updateCalendar();
    }

    resetAppointmentForm() {
        document.getElementById('appointment-notes').value = '';
        this.selectedDate = null;
        this.selectedTime = null;
        
        document.getElementById('timeSlotsContainer').style.display = 'none';
        document.getElementById('appointmentForm').style.display = 'none';
        
        document.querySelectorAll('.calendar-day').forEach(day => {
            day.classList.remove('selected');
        });
    }

    loadUserAppointments() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;
        
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        const userAppointmentsList = appointments.filter(apt => apt.userEmail === currentUser.email);
        
        const userAppointmentsContainer = document.getElementById('userAppointments');
        userAppointmentsContainer.innerHTML = '';
        
        if (userAppointmentsList.length === 0) {
            userAppointmentsContainer.innerHTML = '<p>Δεν έχετε κλείσει ακόμα ραντεβού.</p>';
            return;
        }
        
        // Ταξινόμηση από πιο πρόσφατο προς πιο παλιό
        userAppointmentsList.sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time));
        
        userAppointmentsList.forEach(apt => {
            const aptCard = document.createElement('div');
            aptCard.className = 'appointment-card';
            
            const statusClass = `status-${apt.status}`;
            const statusText = 
                apt.status === 'pending' ? 'Σε Εκκρεμότητα' :
                apt.status === 'confirmed' ? 'Επιβεβαιωμένο' : 'Ακυρωμένο';
            
            aptCard.innerHTML = `
                <div class="appointment-header">
                    <div class="appointment-date">${new Date(apt.date).toLocaleDateString('el-GR')}</div>
                    <div class="appointment-status ${statusClass}">${statusText}</div>
                </div>
                <div class="appointment-time">${apt.time} - ${apt.duration}</div>
                ${apt.notes ? `<div class="appointment-notes">${apt.notes}</div>` : ''}
                <div class="appointment-actions">
                    ${apt.status === 'pending' ? 
                        `<button class="action-btn cancel-btn" data-id="${apt.id}">
                            <i class="fas fa-times"></i> Ακύρωση
                        </button>` : ''}
                </div>
            `;
            
            userAppointmentsContainer.appendChild(aptCard);
        });
    }

    cancelAppointment(appointmentId) {
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        const appointmentIndex = appointments.findIndex(apt => apt.id === appointmentId);
        
        if (appointmentIndex !== -1) {
            appointments[appointmentIndex].status = 'cancelled';
            localStorage.setItem('appointments', JSON.stringify(appointments));
            
            this.showNotification('Το ραντεβού ακυρώθηκε επιτυχώς.', 'success');
            this.loadUserAppointments();
            this.updateCalendar();
        }
    }

    showMessage(message, type) {
        const messageElement = document.getElementById('appointmentMessage');
        messageElement.textContent = message;
        messageElement.className = `message ${type}`;
        messageElement.style.display = 'block';
        
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 5000);
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `message ${type}`;
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.zIndex = '1000';
        notification.style.maxWidth = '300px';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
}

// CSS styles για το σύστημα ραντεβού
const appointmentStyles = `
    .appointment-section {
        background: linear-gradient(135deg, #f0f7ff 0%, #e1f0ff 100%);
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
        border: 2px solid var(--info);
    }
    
    .calendar-container {
        background: white;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    
    .calendar-nav {
        display: flex;
        gap: 10px;
    }
    
    .calendar-nav-btn {
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 5px;
        padding: 8px 12px;
        cursor: pointer;
        transition: background 0.3s;
    }
    
    .calendar-nav-btn:hover {
        background: var(--primary-light);
    }
    
    .current-month {
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--dark);
    }
    
    .calendar-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;
        margin-bottom: 20px;
    }
    
    .calendar-day-header {
        text-align: center;
        font-weight: 600;
        padding: 10px;
        color: var(--dark);
        background: #f5f5f5;
        border-radius: 5px;
    }
    
    .calendar-day {
        text-align: center;
        padding: 10px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
        min-height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
    .calendar-day:hover {
        background: #f9f9f9;
    }
    
    .calendar-day.other-month {
        color: #ccc;
        background: #f9f9f9;
    }
    
    .calendar-day.today {
        background: #e3f2fd;
        border-color: var(--info);
    }
    
    .calendar-day.selected {
        background: var(--primary);
        color: white;
    }
    
    .calendar-day.unavailable {
        background: #ffebee;
        color: #ccc;
        cursor: not-allowed;
    }
    
    .day-number {
        font-weight: 600;
    }
    
    .time-slots-container {
        margin-top: 20px;
    }
    
    .time-slots-title {
        font-weight: 600;
        margin-bottom: 15px;
        color: var(--dark);
    }
    
    .time-slots-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 10px;
    }
    
    .time-slot {
        padding: 12px;
        text-align: center;
        background: #f5f5f5;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .time-slot:hover {
        background: #e0e0e0;
    }
    
    .time-slot.selected {
        background: var(--primary);
        color: white;
        border-color: var(--primary);
    }
    
    .time-slot.unavailable {
        background: #ffebee;
        color: #ccc;
        cursor: not-allowed;
    }
    
    .appointment-form {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #e0e0e0;
    }
    
    .appointment-details {
        background: #f9f9f9;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 15px;
    }
    
    .appointment-summary {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
    
    .summary-item {
        display: flex;
        flex-direction: column;
    }
    
    .summary-label {
        font-weight: 600;
        color: var(--dark);
        font-size: 0.9rem;
    }
    
    .summary-value {
        color: var(--text);
    }
    
    .appointments-list {
        margin-top: 20px;
    }
    
    .appointment-card {
        background: white;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;
        border-left: 4px solid var(--info);
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .appointment-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .appointment-date {
        font-weight: 600;
        color: var(--dark);
    }
    
    .appointment-status {
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
    }
    
    .status-pending {
        background: #fff3e0;
        color: #f57c00;
    }
    
    .status-confirmed {
        background: #e8f5e9;
        color: var(--success);
    }
    
    .status-cancelled {
        background: #ffebee;
        color: var(--error);
    }
    
    .appointment-time {
        color: var(--text);
        margin-bottom: 10px;
    }
    
    .appointment-actions {
        display: flex;
        gap: 10px;
    }
    
    .action-btn {
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.8rem;
        transition: background 0.3s;
    }
    
    .cancel-btn {
        background: #ffebee;
        color: var(--error);
    }
    
    .cancel-btn:hover {
        background: #ffcdd2;
    }
    
    @media (max-width: 768px) {
        .calendar-header {
            flex-direction: column;
            gap: 15px;
        }
        
        .calendar-grid {
            grid-template-columns: repeat(7, 1fr);
            gap: 3px;
        }
        
        .calendar-day {
            padding: 5px;
            min-height: 50px;
            font-size: 0.9rem;
        }
        
        .time-slots-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        }
        
        .appointment-summary {
            grid-template-columns: 1fr;
        }
    }
    
    @media (max-width: 480px) {
        .calendar-grid {
            grid-template-columns: repeat(7, 1fr);
        }
        
        .calendar-day {
            padding: 3px;
            min-height: 40px;
            font-size: 0.8rem;
        }
        
        .time-slots-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;

// Προσθήκη CSS styles
const styleSheet = document.createElement('style');
styleSheet.textContent = appointmentStyles;
document.head.appendChild(styleSheet);

// Εκκίνηση του συστήματος όταν το DOM είναι έτοιμο
document.addEventListener('DOMContentLoaded', function() {
    // Περιμένουμε να φορτώσει η κύρια εφαρμογή
    setTimeout(() => {
        if (document.getElementById('mainApp') && document.getElementById('mainApp').style.display !== 'none') {
            new AppointmentSystem();
        }
    }, 1000);
});

// Αναγνώριση αλλαγών στην κατάσταση σύνδεσης
let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const mainApp = document.getElementById('mainApp');
            if (mainApp && mainApp.style.display !== 'none') {
                // Ελέγχουμε αν το σύστημα ραντεβού έχει ήδη αρχικοποιηθεί
                if (!document.querySelector('[data-tab="appointment-tab"]')) {
                    new AppointmentSystem();
                }
            }
        }
    });
});

// Παρακολούθηση αλλαγών στο mainApp
const mainApp = document.getElementById('mainApp');
if (mainApp) {
    observer.observe(mainApp, { attributes: true });
}

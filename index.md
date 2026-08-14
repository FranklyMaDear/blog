<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <!-- Βελτιωμένο viewport για σωστό scaling σε iOS/Android -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover">
    
    <title>Franklymadear News | Η Ενημέρωση Αλλιώς</title>
    <meta name="description" content="Η Ενημέρωση Αλλιώς. Διαβάστε τις τελευταίες ειδήσεις και παρακολουθήστε αποκλειστικά βίντεο.">
    
    <!-- Open Graph Tags -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://blog.franklymadear.com/">
    <meta property="og:title" content="Franklymadear News">
    <meta property="og:description" content="Η Ενημέρωση Αλλιώς. Ειδήσεις & Αποκλειστικά Βίντεο">
    <meta property="og:image" content="https://blog.franklymadear.com/index.png"> 
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3186700611266549" crossorigin="anonymous"></script>

    <style>
        :root {
            --bg-body: #0a0a0d;
            --bg-card: #16161c;
            --bg-card-hover: #202028;
            --primary: #ffffff;
            --accent-news: #e50914;
            --accent-video: #00e5ff;
            --accent-2: #1db954;
            --text-main: #f2f2f4;
            --text-muted: #9a9aa5;
            --border: #26262f;
            --shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
            --shadow-md: 0 10px 30px rgba(0,0,0,0.55);
            --radius-lg: 16px;
            --radius-md: 10px;
        }

        /* ΒΑΣΙΚΕΣ ΔΙΟΡΘΩΣΕΙΣ ΓΙΑ MOBILE SCROLLING */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        html, body {
            width: 100%;
            max-width: 100vw;
            overflow-x: hidden; /* Κρύβει το οριζόντιο scrolling */
        }
        
        body { 
            font-family: 'Inter', sans-serif; 
            background: var(--bg-body); 
            color: var(--text-main); 
            line-height: 1.5; 
            /* Το overflow: hidden έχει αφαιρεθεί από εδώ για να επιτρέπει το κάθετο scroll εξαρχής 
               Το pop-up λειτουργεί πλέον ως απόλυτο overlay χωρίς να μπλοκάρει το body scroll */
            padding-bottom: 16vh; /* Χώρος για τη διαφήμιση κάτω */
            -webkit-overflow-scrolling: touch; /* Ομαλό scrolling στο iOS */
        }
        
        a { text-decoration: none; color: inherit; }
        ::-webkit-scrollbar { height: 8px; width: 8px; }
        ::-webkit-scrollbar-thumb { background: #333340; border-radius: 8px; }

        .container { width: 100%; max-width: 1100px; margin: 0 auto; padding: 0 16px; }

        /* Header */
        header { background: linear-gradient(180deg, rgba(6,6,8,0.97), rgba(6,6,8,0.9)); padding: 14px 0; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid var(--border); backdrop-filter: blur(10px); }
        .nav { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 20px; font-weight: 900; color: var(--primary); letter-spacing: -0.5px; text-transform: uppercase; }
        .logo span { color: var(--accent-news); }
        .menu a { font-weight: 700; font-size: 13px; background: rgba(255,255,255,0.06); color: var(--text-main); padding: 8px 16px; border-radius: 50px; transition: 0.2s; border: 1px solid var(--border); }
        .menu a:hover { background: var(--accent-news); border-color: var(--accent-news); color: #fff; }

        /* Hero */
        .hero { text-align: center; padding: 40px 12px 24px; background: radial-gradient(ellipse at top, rgba(229,9,20,0.15), transparent 60%); width: 100%; }
        .hero h1 { font-size: 28px; font-weight: 900; color: var(--primary); letter-spacing: -0.5px; line-height: 1.2; }
        .hero p { font-size: 14px; color: var(--text-muted); margin-top: 8px; letter-spacing: 0.5px; text-transform: uppercase; }

        /* CTA */
        .cta-row { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; padding: 0 16px 32px; width: 100%; }
        .cta-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 20px; border-radius: 50px; font-weight: 800; font-size: 13px; transition: 0.2s; border: 1px solid transparent; flex-grow: 1; max-width: 300px; text-align: center; }
        .cta-btn i { font-size: 15px; }
        .cta-games { background: linear-gradient(135deg, var(--accent-2), #14933f); color: #06120a; }
        .cta-omen { background: linear-gradient(135deg, #8b5cf6, #4c1d95); color: #fff; }
        .cta-lifeline { background: linear-gradient(135deg, #f59e0b, #d97706); color: #1a1a1a; }

        /* Section Titles */
        .section-title { font-size: 19px; font-weight: 800; margin-bottom: 20px; color: var(--primary); padding-left: 14px; position: relative; display: flex; align-items: center; gap: 10px; }
        .section-title::before { content: ''; position: absolute; left: 0; top: 2px; bottom: 2px; width: 4px; background: linear-gradient(180deg, var(--accent-news), var(--accent-video)); border-radius: 4px; }
        .section-title .fa-newspaper { color: var(--accent-news); }
        .section-title .fa-play-circle { color: var(--accent-video); }

        /* Άρθρα */
        .posts-grid { display: flex; flex-direction: column; gap: 20px; margin-bottom: 24px; width: 100%; }
        .post-card { background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border); transition: 0.25s; position: relative; width: 100%; display: flex; flex-direction: column; }

        .lead-card { border-left: 4px solid var(--accent-news); }
        .post-image-wrap { position: relative; width: 100%; }
        .post-card img { width: 100%; aspect-ratio: 16/9; height: auto; object-fit: cover; display: block; }
        
        .post-avatar { position: absolute; left: 14px; bottom: -18px; width: 40px; height: 40px; border-radius: 50%; background: var(--accent-news); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 16px; border: 3px solid var(--bg-card); z-index: 2; }
        
        .post-content { padding: 26px 16px 16px; display: flex; flex-direction: column; flex-grow: 1; }
        .post-card h3 { font-size: 18px; font-weight: 800; margin-bottom: 8px; line-height: 1.3; color: var(--primary); }
        .post-excerpt { font-size: 14px; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 14px; flex-grow: 1; }
        
        .post-footer-row { display: flex; align-items: center; justify-content: space-between; padding-top: 10px; border-top: 1px solid var(--border); margin-top: auto; }
        .post-source { display: flex; align-items: center; gap: 8px; }
        .source-icon { width: 20px; height: 20px; border-radius: 50%; background: var(--accent-news); color: #fff; font-size: 10px; font-weight: 900; display: flex; align-items: center; justify-content: center; }
        .source-name { font-size: 12px; font-weight: 700; color: var(--text-main); }
        .post-time { font-size: 12px; color: var(--text-muted); }
        
        .post-actions { display: flex; align-items: center; gap: 2px; }
        .icon-btn { background: none; border: none; color: var(--text-muted); font-size: 16px; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; border-radius: 50%; cursor: pointer; }
        .icon-btn.liked { color: var(--accent-news); }

        /* Διαφημίσεις (In-Article) */
        .ad-container { margin: 12px 0; width: 100%; background: #101014; border-radius: var(--radius-md); text-align: center; padding: 10px; border: 1px dashed #33333d; position: relative; overflow: hidden; }
        .ad-container::before { content: 'ΔΙΑΦΗΜΙΣΗ'; font-size: 10px; color: #5a5a66; font-weight: 700; display: block; margin-bottom: 6px; letter-spacing: 1px; }
        .separator-ad { margin-top: 24px; margin-bottom: 24px; }

        /* Βίντεο */
        .video-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 20px; width: 100%; }
        .video-card { background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border); display: block; position: relative; width: 100%; }
        .video-thumb { position: relative; width: 100%; aspect-ratio: 1 / 1; overflow: hidden; }
        .video-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; filter: brightness(0.8); }
        .video-play-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
        .video-play-overlay i { width: 36px; height: 36px; border-radius: 50%; background: rgba(0,0,0,0.55); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 14px; border: 2px solid rgba(255,255,255,0.65); }
        .duration-badge { position: absolute; bottom: 6px; right: 6px; background: rgba(0,0,0,0.8); color: #fff; padding: 3px 6px; border-radius: 4px; font-size: 10px; font-weight: 700; }
        .video-content { padding: 8px; }
        .video-title { font-weight: 700; font-size: 12px; color: var(--primary); line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .video-grid > .ad-container { grid-column: 1 / -1; width: 100%; }

        /* Pop-up (Διορθωμένο για να μην εμποδίζει το scroll αν αποτύχει η JS) */
        .entry-overlay { position: fixed; inset: 0; background: radial-gradient(ellipse at center, rgba(30,4,6,0.98), rgba(4,4,6,0.99)); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 99999; padding: 16px; transition: opacity 0.4s ease, visibility 0.4s ease; }
        .entry-overlay.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
        .entry-modal { background: var(--bg-card); padding: 24px; border-radius: var(--radius-lg); text-align: center; width: 100%; max-width: 380px; box-shadow: 0 20px 60px rgba(0,0,0,0.7); border: 1px solid var(--border); border-top: 4px solid var(--accent-news); }
        .entry-modal h2 { color: var(--primary); font-size: 22px; font-weight: 900; margin-bottom: 16px; }
        .btn-enter { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; margin-top: 16px; padding: 16px; font-size: 15px; font-weight: 800; color: #fff; border-radius: 50px; border: none; cursor: pointer; background: var(--accent-news); }

        /* Sticky Ads 15% (ROLL UP / ROLL DOWN) - Υποστήριξη iOS/Android */
        .sticky-ad { 
            position: fixed; 
            left: 0; 
            width: 100%; 
            height: 15vh; /* Fallback για παλιούς browsers */
            height: 15dvh; /* ΑΚΡΙΒΩΣ 15% της δυναμικής οθόνης για iOS & Android */
            min-height: 60px;
            background: #101014; 
            padding: 0; 
            box-shadow: 0 0 20px rgba(0,0,0,0.8); 
            z-index: 9999; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1); 
            border-color: var(--border); 
            overflow: hidden;
        }
        .sticky-top { top: 0; transform: translateY(-100%); border-bottom: 2px solid var(--accent-news); }
        .sticky-top.show { transform: translateY(0); }
        
        .sticky-bottom { bottom: 0; transform: translateY(100%); border-top: 2px solid var(--accent-news); }
        .sticky-bottom.show { transform: translateY(0); }
        
        .sticky-ad .adsbygoogle { display: block; width: 100%; height: 100% !important; }
        .sticky-close { position: absolute; background: var(--accent-news); color: #fff; border: none; width: 28px; height: 28px; border-radius: 50%; font-size: 14px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.5); z-index: 10; }
        .sticky-top .sticky-close { bottom: -14px; right: 16px; top: auto; } /* Το κουμπί βγαίνει λίγο έξω για εύκολο κλικ */
        .sticky-bottom .sticky-close { top: -14px; right: 16px; bottom: auto; }

        footer { text-align: center; padding: 24px 16px; background: #050506; color: var(--text-muted); font-size: 13px; margin-top: 20px; border-top: 1px solid var(--border); }
        footer span { color: var(--accent-news); font-weight: 800; }

        /* Tablet & Desktop βελτιώσεις */
        @media (min-width: 600px) {
            .posts-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
            .lead-card { grid-column: 1 / -1; display: flex; flex-direction: row; }
            .lead-card .post-image-wrap { flex: 1; }
            .lead-card .post-image-wrap img { height: 100%; }
            .lead-card .post-content { flex: 1; justify-content: center; padding: 30px; }
            .video-grid { grid-template-columns: repeat(3, 1fr); }
            .sticky-ad { height: 10dvh; } /* Σε μεγάλες οθόνες το 15% είναι πολύ μεγάλο */
        }
        @media (min-width: 900px) {
            .video-grid { grid-template-columns: repeat(4, 1fr); }
        }
    </style>
</head>
<body>
    <!-- Pop-up Εισόδου -->
    <div class="entry-overlay" id="entryOverlay">
        <div class="entry-modal">
            <h2>Franklymadear <span>News</span></h2>
            <div style="min-height: 150px; border-radius:12px; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; background:#f8fafc; overflow: hidden;">
                <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
            <button class="btn-enter" onclick="enterPage()">ΣΥΝΕΧΕΙΑ ΣΤΟ BLOG <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>

    <!-- Sticky Διαφήμιση Πάνω (ROLL DOWN) -->
    <div class="sticky-ad sticky-top" id="topAd">
        <button class="sticky-close" onclick="this.parentElement.classList.remove('show')"><i class="fas fa-times"></i></button>
        <ins class="adsbygoogle" style="display:block; width:100%; height:100%;" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>

    <header>
        <div class="container nav">
            <div class="logo">Franklymadear<span>.</span></div>
            <div class="menu"><a href="/"><i class="fas fa-home"></i> Αρχική</a></div>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Η Ενημέρωση Αλλιώς</h1>
            <p>Ειδήσεις & Αποκλειστικά Βίντεο</p>
        </div>
    </section>

    <div class="cta-row">
        <a href="https://games.franklymadear.com" target="_blank" rel="noopener" class="cta-btn cta-games"><i class="fas fa-gamepad"></i> FranklyGames</a>
        <a href="https://t.me/omenread_bot/omen" target="_blank" rel="noopener" class="cta-btn cta-omen"><i class="fas fa-moon"></i> Καφεμαντεία</a>
        <a href="https://t.me/lifeline2026_bot/games" target="_blank" rel="noopener" class="cta-btn cta-lifeline"><i class="fas fa-hand-sparkles"></i> Χειρομαντεία</a>
    </div>

    <div class="container">
        <!-- ΕΝΟΤΗΤΑ 1: ΑΡΘΡΑ -->
        <h2 class="section-title"><i class="far fa-newspaper"></i> Τελευταία Νέα</h2>
        <section class="posts-grid">
            
            <article class="post-card lead-card">
                <div class="post-image-wrap">
                    <img src="/post/four/photo7.png" alt="SHOWBIZ" width="800" height="450" loading="eager">
                    <div class="post-avatar">F</div>
                </div>
                <div class="post-content">
                    <h3><a href="/post/four/index.html">💥 SHOWBIZ EXPLOSION</a></h3>
                    <p class="post-excerpt">10 Σοκαριστικές Αλήθειες & Ανατροπές που Συμβαίνουν Τώρα!</p>
                    <div class="post-footer-row">
                        <div class="post-source"><span class="source-icon">F</span><span class="source-name">Franklymadear</span><span class="post-time">· 12 Αυγ</span></div>
                        <div class="post-actions">
                            <button class="icon-btn" onclick="toggleLike(this)"><i class="far fa-heart"></i></button>
                            <button class="icon-btn" onclick="shareArticle('/post/four/index.html')"><i class="fas fa-share-nodes"></i></button>
                        </div>
                    </div>
                </div>
            </article>

            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>

            <article class="post-card">
                <div class="post-image-wrap">
                    <img src="/post/one/photo4.png" alt="Προσωπικός Βοηθός" width="400" height="225" loading="lazy">
                    <div class="post-avatar">F</div>
                </div>
                <div class="post-content">
                    <h3><a href="/post/one/index.html">Έως 1.939 ευρώ τον μήνα για τον Προσωπικό Βοηθό</a></h3>
                    <p class="post-excerpt">Σημαντικές εξελίξεις φέρνει το Υπουργείο Κοινωνικής Συνοχής.</p>
                    <div class="post-footer-row">
                        <div class="post-source"><span class="source-icon">F</span><span class="source-name">Franklymadear</span><span class="post-time">· 12 Αυγ</span></div>
                        <div class="post-actions">
                            <button class="icon-btn" onclick="toggleLike(this)"><i class="far fa-heart"></i></button>
                            <button class="icon-btn" onclick="shareArticle('/post/one/index.html')"><i class="fas fa-share-nodes"></i></button>
                        </div>
                    </div>
                </div>
            </article>

            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>

            <article class="post-card">
                <div class="post-image-wrap">
                    <img src="/post/two/photo5.png" alt="Πυρκαγιές" width="400" height="225" loading="lazy">
                    <div class="post-avatar">F</div>
                </div>
                <div class="post-content">
                    <h3><a href="/post/two/index.html">🚨 ΩΡΑ ΜΗΔΕΝ: Η Ελλάδα φλέγεται</a></h3>
                    <p class="post-excerpt">Οι πύρινες φλόγες καταπίνουν τα πάντα. Κατηγορία 5.</p>
                    <div class="post-footer-row">
                        <div class="post-source"><span class="source-icon">F</span><span class="source-name">Franklymadear</span><span class="post-time">· 11 Αυγ</span></div>
                        <div class="post-actions">
                            <button class="icon-btn" onclick="toggleLike(this)"><i class="far fa-heart"></i></button>
                            <button class="icon-btn" onclick="shareArticle('/post/two/index.html')"><i class="fas fa-share-nodes"></i></button>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <!-- Κεντρική διαφήμιση -->
        <div class="ad-container separator-ad">
            <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <!-- ΕΝΟΤΗΤΑ 2: ΒΙΝΤΕΟ -->
        <h2 class="section-title"><i class="far fa-play-circle"></i> Τελευταία Βίντεο</h2>
        <section class="video-grid">
            {% for video in site.data.videos %}
            <a href="{{ video.url }}" class="video-card">
                <div class="video-thumb">
                    <img src="{{ video.image }}" alt="{{ video.title }}" width="300" height="300" loading="lazy">
                    <span class="video-play-overlay"><i class="fas fa-play"></i></span>
                    {% if video.duration %}
                    <span class="duration-badge">{{ video.duration }}</span>
                    {% endif %}
                </div>
                <div class="video-content">
                    <span class="video-title">{{ video.title }}</span>
                </div>
            </a>
            {% if forloop.index == 1 or forloop.index == 3 %}
            <div class="ad-container">
                <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
            {% endif %}
            {% endfor %}
        </section>
    </div>

    <!-- Sticky Διαφήμιση Κάτω (ROLL UP) -->
    <div class="sticky-ad sticky-bottom" id="bottomAd">
        <button class="sticky-close" onclick="this.parentElement.classList.remove('show')"><i class="fas fa-times"></i></button>
        <ins class="adsbygoogle" style="display:block; width:100%; height:100%;" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>

    <footer><div class="container">&copy; 2026 <span>Franklymadear</span> News.</div></footer>

    <script>
        function enterPage() {
            document.getElementById('entryOverlay').classList.add('hidden');
            // Πλέον δεν πειράζουμε το overflow του body μέσω JS για αποφυγή bugs στο iOS
            setTimeout(() => {
                document.getElementById('topAd').classList.add('show');
                document.getElementById('bottomAd').classList.add('show');
            }, 500);
        }

        function toggleLike(btn) {
            btn.classList.toggle('liked');
            const icon = btn.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
        }

        function shareArticle(url) {
            const fullUrl = window.location.origin + url;
            if (navigator.share) {
                navigator.share({ url: fullUrl }).catch(() => {});
            } else {
                navigator.clipboard.writeText(fullUrl);
                alert("Το link αντιγράφηκε!");
            }
        }
    </script>
</body>
</html>

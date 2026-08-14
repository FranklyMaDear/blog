---
layout: default
title: Αρχική
---

<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <title>Franklymadear News</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,600;14..32,800;14..32,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3186700611266549" crossorigin="anonymous"></script>

    <style>
        :root { 
            --bg-body: #f8fafc; 
            --bg-card: #ffffff; 
            --primary: #0f172a; 
            --accent: #dc2626; 
            --accent-hover: #b91c1c;
            --text-main: #1e293b; 
            --text-muted: #64748b; 
            --border-light: #e2e8f0;
            --shadow-card: 0 4px 20px rgba(0,0,0,0.04);
            --shadow-hover: 0 12px 30px rgba(0,0,0,0.08);
            --radius-lg: 16px;
            --radius-md: 12px;
        }
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { 
            font-family: 'Inter', sans-serif; 
            background-color: var(--bg-body); 
            color: var(--text-main); 
            line-height: 1.6; 
            overflow: hidden; 
            padding-bottom: 80px; 
            -webkit-font-smoothing: antialiased; 
        }
        body.unlocked { overflow: auto; }
        a { text-decoration: none; color: inherit; transition: all 0.2s ease; }
        
        /* Σύγχρονο Header */
        header { 
            background: rgba(255, 255, 255, 0.85); 
            backdrop-filter: blur(12px); 
            -webkit-backdrop-filter: blur(12px);
            padding: 14px 0; 
            position: sticky; 
            top: 0; 
            z-index: 100; 
            border-bottom: 1px solid var(--border-light); 
        }
        .container { max-width: 960px; margin: 0 auto; padding: 0 16px; }
        .nav { display: flex; justify-content: space-between; align-items: center; }
        .logo { 
            font-size: 22px; 
            font-weight: 900; 
            color: var(--primary); 
            letter-spacing: -0.5px; 
        }
        .logo span { color: var(--accent); }
        .menu a { 
            font-weight: 600; 
            color: var(--text-muted); 
            font-size: 14px; 
            padding: 8px 14px; 
            border-radius: 50px; 
            background: var(--bg-body);
        }
        .menu a:hover { background: #e2e8f0; }
        
        /* Hero Section - Minimal */
        .hero { text-align: center; padding: 32px 16px 24px; margin-bottom: 24px; }
        .hero h1 { font-size: 28px; font-weight: 900; color: var(--primary); margin-bottom: 6px; letter-spacing: -0.5px; }
        .hero p { font-size: 15px; color: var(--text-muted); }
        
        /* Section Titles */
        .section-title { 
            font-size: 20px; 
            font-weight: 800; 
            margin: 0 0 20px; 
            color: var(--primary); 
            display: flex; 
            align-items: center; 
            gap: 10px; 
            border-left: 4px solid var(--accent);
            padding-left: 12px;
        }
        .section-title i { color: var(--accent); font-size: 18px; }
        
        /* Cards Grid - Professional */
        .posts-grid { display: flex; flex-direction: column; gap: 20px; margin-bottom: 24px; }
        
        .post-card { 
            display: flex; 
            gap: 16px; 
            align-items: flex-start; 
            background: var(--bg-card); 
            padding: 16px; 
            border-radius: var(--radius-md); 
            box-shadow: var(--shadow-card);
            border: 1px solid var(--border-light);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .post-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-hover); }
        .post-card img { 
            width: 160px; 
            height: 110px; 
            object-fit: cover; 
            border-radius: var(--radius-md); 
            flex-shrink: 0;
        }
        .post-content { flex: 1; }
        .post-meta { font-size: 12px; color: var(--accent); font-weight: 700; display: block; margin-bottom: 4px; }
        .post-card h2 { margin: 0 0 8px; font-size: 17px; font-weight: 800; line-height: 1.3; color: var(--primary); }
        .post-card h2 a:hover { color: var(--accent); }
        .post-excerpt { color: var(--text-muted); font-size: 14px; margin: 0 0 12px; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .read-more { display: inline-flex; align-items: center; gap: 6px; font-weight: 700; font-size: 13px; color: var(--primary); }
        .read-more:hover { color: var(--accent); gap: 12px; }

        /* Video Grid - Stunning */
        .video-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
            gap: 20px; 
            margin-bottom: 40px; 
        }
        .video-card { 
            background: var(--bg-card); 
            border-radius: var(--radius-lg); 
            overflow: hidden; 
            box-shadow: var(--shadow-card); 
            border: 1px solid var(--border-light); 
            transition: all 0.25s cubic-bezier(0.2, 0, 0, 1); 
            display: flex; 
            flex-direction: column; 
            position: relative;
        }
        .video-card:hover { 
            transform: translateY(-6px); 
            box-shadow: var(--shadow-hover); 
            border-color: var(--accent);
        }
        .video-card img { 
            width: 100%; 
            height: 190px; 
            object-fit: cover; 
            display: block;
        }
        .video-title { 
            padding: 14px 16px 10px; 
            font-weight: 800; 
            font-size: 16px; 
            color: var(--primary); 
            line-height: 1.4; 
            flex-grow: 1; 
            display: block; 
            min-height: 65px;
        }
        .play-btn { 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            gap: 8px; 
            margin: 0 16px 16px; 
            background: var(--primary); 
            color: #ffffff; 
            padding: 10px; 
            border-radius: 50px; 
            font-weight: 700; 
            font-size: 13px; 
            transition: background 0.2s;
        }
        .video-card:hover .play-btn { background: var(--accent); }

        /* Ad Placeholder */
        .ad-container { margin: 4px 0 24px; width: 100%; background: #f1f5f9; border-radius: var(--radius-md); text-align: center; border: 1px dashed #cbd5e1; padding: 15px; display: flex; justify-content: center; align-items: center; flex-direction: column; }
        .ad-container::before { content: 'ΔΙΑΦΗΜΙΣΗ'; font-size: 10px; color: #94a3b8; font-weight: 700; letter-spacing: 1px; margin-bottom: 6px; display: block; }
        .video-grid .ad-container { grid-column: 1 / -1; margin: 10px 0; }
        
        /* Entry Overlay */
        .entry-overlay { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.92); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; z-index: 99999; padding: 20px; transition: opacity 0.3s ease, visibility 0.3s ease; }
        .entry-overlay.hidden { opacity: 0; visibility: hidden; }
        .entry-modal { background: var(--bg-card); padding: 30px; border-radius: var(--radius-lg); text-align: center; max-width: 420px; width: 100%; box-shadow: 0 20px 40px rgba(0,0,0,0.2); border-top: 4px solid var(--accent); }
        .entry-modal h2 { color: var(--primary); font-size: 24px; font-weight: 900; margin-bottom: 20px; }
        .btn-3d { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; margin-top: 20px; padding: 16px; font-size: 16px; font-weight: 800; color: #fff; border-radius: 50px; border: none; cursor: pointer; background: var(--accent); transition: all 0.2s ease; }
        .btn-3d:hover { background: var(--accent-hover); transform: scale(1.02); }
        
        /* Sticky Ads */
        .sticky-ad { position: fixed; left: 0; width: 100%; background: #ffffff; padding: 6px; box-shadow: 0 -4px 12px rgba(0,0,0,0.08); z-index: 9999; text-align: center; display: flex; justify-content: center; align-items: center; transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .sticky-top { top: 0; border-bottom: 2px solid var(--accent); transform: translateY(-100%); }
        .sticky-top.show { transform: translateY(0); }
        .sticky-bottom { bottom: 0; border-top: 2px solid var(--accent); transform: translateY(100%); }
        .sticky-bottom.show { transform: translateY(0); }
        .sticky-close { position: absolute; background: var(--primary); color: #fff; border: none; width: 28px; height: 28px; border-radius: 50%; font-size: 13px; cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center; top: -14px; right: 16px; box-shadow: 0 2px 6px rgba(0,0,0,0.2); transition: transform 0.2s ease; }
        
        footer { text-align: center; padding: 24px 20px; background: var(--primary); color: #94a3b8; font-size: 13px; margin-top: 40px; }
        footer span { color: #ffffff; font-weight: 700; }

        @media (max-width: 600px) {
            .post-card { flex-direction: column; gap: 12px; }
            .post-card img { width: 100%; height: 180px; }
            .hero h1 { font-size: 24px; }
            .video-grid { grid-template-columns: 1fr; }
            .video-card img { height: 220px; }
        }
    </style>
</head>
<body>
    <!-- Οθόνη Υποδοχής -->
    <div class="entry-overlay" id="entryOverlay">
        <div class="entry-modal">
            <h2>Franklymadear <span>News</span></h2>
            <div style="min-height: 260px; background:#f8fafc; border-radius:12px; border:1px dashed #cbd5e1; margin-bottom: 15px; display:flex; align-items:center; justify-content:center;">
                <!-- Διαφήμιση Εισόδου -->
                <ins class="adsbygoogle" style="display:block; text-align:center; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
            <button class="btn-3d" onclick="enterArticle()">Συνεχεια στο Blog <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>

    <!-- Sticky Ad Top -->
    <div class="sticky-ad sticky-top" id="topAd">
        <button class="sticky-close" onclick="this.parentElement.classList.remove('show')"><i class="fas fa-times"></i></button>
        <ins class="adsbygoogle" style="display:block; text-align:center; width:100%; height:50px;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>

    <header>
        <div class="container nav">
            <div class="logo">Franklymadear<span>.</span></div>
            <div class="menu"><a href="/"><i class="fas fa-home"></i></a></div>
        </div>
    </header>

    <section class="hero">
        <div class="container">
            <h1>Η Ενημέρωση Αλλιώς</h1>
            <p>Ειδήσεις, Αναλύσεις & Αποκλειστικά Βίντεο</p>
        </div>
    </section>

    <div class="container">
        <!-- ΕΝΟΤΗΤΑ 1: ΑΡΘΡΑ -->
        <h2 class="section-title"><i class="far fa-newspaper"></i> Τελευταία Νέα</h2>
        <section class="posts-grid">
            <article class="post-card">
                <img src="/post/four/photo7.png" alt="💥 SHOWBIZ EXPLOSION">
                <div class="post-content">
                    <span class="post-meta">12 Αυγούστου 2026</span>
                    <h2><a href="/post/four/index.html">💥 SHOWBIZ EXPLOSION</a></h2>
                    <p class="post-excerpt">10 Σοκαριστικές Αλήθειες & Ανατροπές που Συμβαίνουν Τώρα!</p>
                    <a href="/post/four/index.html" class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
            <!-- Διαφήμιση 1 -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; text-align:center; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>
            
            <article class="post-card">
                <img src="/post/one/photo4.png" alt="Έως 1.939 ευρώ">
                <div class="post-content">
                    <span class="post-meta">12 Αυγούστου 2026</span>
                    <h2><a href="/post/one/index.html">Έως 1.939 ευρώ τον μήνα για τον Προσωπικό Βοηθό</a></h2>
                    <p class="post-excerpt">Σημαντικές εξελίξεις φέρνει το Υπουργείο Κοινωνικής Συνοχής.</p>
                    <a href="/post/one/index.html" class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
            <!-- Διαφήμιση 2 -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; text-align:center; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>
            
            <article class="post-card">
                <img src="/post/two/photo5.png" alt="🚨 ΩΡΑ ΜΗΔΕΝ">
                <div class="post-content">
                    <span class="post-meta">11 Αυγούστου 2026</span>
                    <h2><a href="/post/two/index.html">🚨 ΩΡΑ ΜΗΔΕΝ: Η Ελλάδα φλέγεται</a></h2>
                    <p class="post-excerpt">Οι πύρινες φλόγες καταπίνουν τα πάντα. Κατηγορία 5.</p>
                    <a href="/post/two/index.html" class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
            <!-- Διαφήμιση 3 -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; text-align:center; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>
            
            <article class="post-card">
                <img src="/post/three/photo6.png" alt="Η θεωρία του Σοκ">
                <div class="post-content">
                    <span class="post-meta">10 Αυγούστου 2026</span>
                    <h2><a href="/post/three/index.html">Η θεωρία του Σοκ στον Εγκέλαδο</a></h2>
                    <p class="post-excerpt">Η χρονική και γεωγραφική σύμπτωση των φονικών σεισμών.</p>
                    <a href="/post/three/index.html" class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        </section>

        <!-- ΚΕΝΤΡΙΚΗ ΔΙΑΦΗΜΙΣΗ -->
        <div class="ad-container">
            <ins class="adsbygoogle" style="display:block; text-align:center; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <!-- ΕΝΟΤΗΤΑ 2: ΒΙΝΤΕΟ (ΔΥΝΑΜΙΚΑ) -->
        <h2 class="section-title"><i class="far fa-play-circle"></i> Τελευταία Βίντεο</h2>
        <section class="video-grid">
            
            {% for video in site.data.videos %}
            <a href="{{ video.url }}" class="video-card">
                <img src="{{ video.image }}" alt="{{ video.title }}">
                <span class="video-title">{{ video.title }}</span>
                <span class="play-btn"><i class="fas fa-play"></i> Παρακολούθηση</span>
            </a>

            <!-- Διαφήμιση μετά το 1ο και το 3ο βίντεο -->
            {% if forloop.index == 1 or forloop.index == 3 %}
            <div class="ad-container">
                <ins class="adsbygoogle" style="display:block; text-align:center; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
            {% endif %}

            {% endfor %}

        </section>
    </div>

    <!-- Sticky Ad Bottom -->
    <div class="sticky-ad sticky-bottom" id="bottomAd">
        <button class="sticky-close" onclick="this.parentElement.classList.remove('show')"><i class="fas fa-times"></i></button>
        <ins class="adsbygoogle" style="display:block; text-align:center; width:100%; height:50px;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>

    <footer>
        <div class="container">&copy; 2026 <span>Franklymadear News</span>.</div>
    </footer>

    <script>
        function enterArticle() {
            const overlay = document.getElementById('entryOverlay');
            overlay.classList.add('hidden');
            document.body.classList.add('unlocked');
            setTimeout(() => { overlay.style.display = 'none'; }, 300);
            setTimeout(() => {
                document.getElementById('topAd').classList.add('show');
                document.getElementById('bottomAd').classList.add('show');
            }, 1000);
        }
    </script>
</body>
</html>

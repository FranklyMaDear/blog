---
title: Αρχική
---
<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes, viewport-fit=cover" />
    <title>Franklymadear News</title>

    <!-- Open Graph & Twitter Card -->
    <meta property="og:title" content="Franklymadear News – Ενημέρωση Βίντεο" />
    <meta property="og:description" content="Ειδήσεις, βίντεο και αναλύσεις από τον κόσμο της ενημέρωσης." />
    <meta property="og:image" content="https://blog.franklymadear.com/index.png" />
    <meta property="og:url" content="https://blog.franklymadear.com/" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Franklymadear News – Ενημέρωση Βίντεο" />
    <meta name="twitter:description" content="Ειδήσεις, βίντεο και αναλύσεις από τον κόσμο της ενημέρωσης." />
    <meta name="twitter:image" content="https://blog.franklymadear.com/index.png" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,600;14..32,700;14..32,800;14..32,900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3186700611266549" crossorigin="anonymous"></script>

    <style>
        /* ----- ΒΑΣΗ ----- */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --bg-body: #0a0d14;
            --bg-card: #151e2a;
            --bg-header: #0f1620;
            --primary: #ffffff;
            --accent: #ff3b7f;
            --secondary: #00e5ff;
            --text-muted: #8a9bb5;
            --border-color: #2a3648;
            --shadow: 0 8px 24px rgba(0,0,0,0.6);
        }
        html { font-size: 16px; }
        body {
            font-family: 'Inter', -apple-system, sans-serif;
            background: var(--bg-body);
            color: var(--primary);
            line-height: 1.6;
            overflow: hidden;
            padding-bottom: 80px;
            -webkit-font-smoothing: antialiased;
        }
        body.unlocked { overflow: auto; }
        a { text-decoration: none; color: inherit; }
        .container { max-width: 720px; margin: 0 auto; padding: 0 16px; }

        /* ----- HEADER ----- */
        header {
            background: var(--bg-header);
            padding: 14px 0;
            position: sticky;
            top: 0;
            z-index: 100;
            border-bottom: 2px solid var(--border-color);
            backdrop-filter: blur(10px);
        }
        .nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo {
            font-weight: 900;
            font-size: 24px;
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .menu {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .menu a {
            font-weight: 600;
            font-size: 14px;
            padding: 8px 16px;
            background: rgba(255,255,255,0.06);
            border: 1px solid var(--border-color);
            border-radius: 0;
            color: var(--primary);
            min-height: 44px;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: 0.2s;
        }
        .menu a:hover {
            background: var(--accent);
            border-color: var(--accent);
            color: #fff;
        }
        .menu .games-btn {
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            border: none;
            color: #fff;
            font-weight: 700;
        }
        .menu .games-btn:hover {
            transform: scale(1.04);
            box-shadow: 0 0 20px rgba(255,59,127,0.4);
        }

        /* ----- HERO ----- */
        .hero {
            text-align: center;
            padding: 32px 12px 24px;
        }
        .hero h1 {
            font-size: 30px;
            font-weight: 900;
            background: linear-gradient(135deg, #fff 30%, var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .hero p {
            font-size: 16px;
            color: var(--text-muted);
            margin-top: 4px;
        }

        /* ----- SECTION TITLES ----- */
        .section-title {
            font-size: 22px;
            font-weight: 800;
            margin-bottom: 20px;
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: flex;
            align-items: center;
            gap: 10px;
            border-left: 4px solid var(--accent);
            padding-left: 12px;
        }
        .section-title i {
            -webkit-text-fill-color: initial;
            color: var(--secondary);
        }

        /* ----- POSTS (κάθετη λίστα, τετράγωνες εικόνες) ----- */
        .posts-grid {
            display: flex;
            flex-direction: column;
            gap: 18px;
            margin-bottom: 24px;
        }
        .post-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow);
            overflow: hidden;
            transition: 0.25s ease;
        }
        .post-card:hover {
            transform: translateY(-4px);
            border-color: var(--accent);
        }
        .post-card img {
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            display: block;
        }
        .post-content {
            padding: 18px;
        }
        .post-meta {
            font-size: 12px;
            font-weight: 700;
            color: var(--secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: block;
            margin-bottom: 4px;
        }
        .post-card h2 {
            font-size: 20px;
            font-weight: 800;
            margin-bottom: 6px;
            line-height: 1.3;
        }
        .post-card h2 a:hover {
            color: var(--accent);
        }
        .post-excerpt {
            font-size: 15px;
            color: var(--text-muted);
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin-bottom: 10px;
        }
        .read-more {
            font-weight: 700;
            font-size: 14px;
            color: var(--secondary);
            display: inline-flex;
            align-items: center;
            gap: 4px;
            transition: 0.2s;
            min-height: 44px;
        }
        .read-more:hover {
            color: var(--accent);
            gap: 10px;
        }

        /* ----- VIDEOS (επίσης κάθετα, τετράγωνα) ----- */
        .video-grid {
            display: flex;
            flex-direction: column;
            gap: 18px;
            margin-bottom: 24px;
        }
        .video-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow);
            overflow: hidden;
            transition: 0.25s ease;
            display: flex;
            flex-direction: column;
        }
        .video-card:hover {
            transform: translateY(-4px);
            border-color: var(--secondary);
        }
        .video-card img {
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            display: block;
        }
        .video-content {
            padding: 16px 18px 18px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .video-title {
            font-weight: 700;
            font-size: 17px;
            color: #fff;
            line-height: 1.3;
        }
        .play-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background: var(--accent);
            color: #fff;
            padding: 12px;
            font-weight: 700;
            font-size: 14px;
            border: none;
            cursor: pointer;
            transition: 0.2s;
            min-height: 48px;
            width: 100%;
            border-radius: 0;
        }
        .video-card:hover .play-btn {
            background: var(--secondary);
            color: #0a0d14;
        }

        /* ----- ADS ----- */
        .ad-container {
            margin: 8px 0 16px;
            background: var(--bg-card);
            text-align: center;
            padding: 16px;
            border: 1px dashed var(--border-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 0;
        }
        .ad-container::before {
            content: 'ΔΙΑΦΗΜΙΣΗ';
            font-size: 10px;
            color: var(--text-muted);
            font-weight: 700;
            display: block;
            margin-bottom: 6px;
            letter-spacing: 1px;
        }
        .separator-ad {
            margin-top: 24px;
            margin-bottom: 24px;
        }

        /* ----- STICKY ADS ----- */
        .sticky-ad {
            position: fixed;
            left: 0;
            width: 100%;
            background: var(--bg-card);
            padding: 6px;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.7);
            z-index: 9999;
            text-align: center;
            display: flex;
            justify-content: center;
            transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
            border: 1px solid var(--border-color);
        }
        .sticky-top {
            top: 0;
            transform: translateY(-100%);
            border-bottom: 2px solid var(--accent);
        }
        .sticky-top.show { transform: translateY(0); }
        .sticky-bottom {
            bottom: 0;
            transform: translateY(100%);
            border-top: 2px solid var(--accent);
        }
        .sticky-bottom.show { transform: translateY(0); }
        .sticky-close {
            position: absolute;
            background: var(--accent);
            color: #fff;
            border: none;
            width: 32px;
            height: 32px;
            font-size: 16px;
            cursor: pointer;
            top: -16px;
            right: 14px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0;
            transition: 0.2s;
        }
        .sticky-close:hover {
            transform: scale(1.1);
            background: #fff;
            color: var(--accent);
        }

        /* ----- POPUP ----- */
        .entry-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.92);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            padding: 20px;
            transition: opacity 0.4s ease, visibility 0.4s ease;
        }
        .entry-overlay.hidden {
            opacity: 0;
            visibility: hidden;
        }
        .entry-modal {
            background: var(--bg-card);
            padding: 30px 28px 32px;
            text-align: center;
            max-width: 400px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0,0,0,0.8);
            border-top: 6px solid var(--accent);
            border-radius: 0;
        }
        .entry-modal h2 {
            font-size: 28px;
            font-weight: 900;
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 18px;
        }
        .btn-enter {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            margin-top: 18px;
            padding: 16px;
            font-size: 16px;
            font-weight: 800;
            color: #fff;
            border: none;
            cursor: pointer;
            background: linear-gradient(135deg, var(--accent), var(--secondary));
            transition: 0.25s ease;
            min-height: 56px;
            border-radius: 0;
        }
        .btn-enter:hover {
            transform: scale(1.04);
            box-shadow: 0 0 30px rgba(255,59,127,0.5);
        }

        /* ----- FOOTER ----- */
        footer {
            text-align: center;
            padding: 24px 16px;
            background: var(--bg-header);
            color: var(--text-muted);
            font-size: 14px;
            margin-top: 20px;
            border-top: 1px solid var(--border-color);
        }
        footer span { color: #fff; font-weight: 700; }

        /* ----- RESPONSIVE (μόνο για tablet 2 στήλες στα βίντεο αν θες, αλλά όχι υποχρεωτικό) ----- */
        @media (min-width: 600px) {
            .video-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 18px;
            }
            .video-card {
                margin-bottom: 0;
            }
        }
        /* Αλλά σε κινητό μένουν κάθετα */
    </style>
</head>
<body>

    <!-- POPUP ΕΙΣΟΔΟΥ -->
    <div class="entry-overlay" id="entryOverlay">
        <div class="entry-modal">
            <h2>Franklymadear <span style="-webkit-text-fill-color: var(--secondary);">News</span></h2>
            <div style="min-height: 200px; border:1px solid var(--border-color); display:flex; align-items:center; justify-content:center; background:var(--bg-body);">
                <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
            <button class="btn-enter" onclick="enterPage()">ΣΥΝΕΧΕΙΑ ΣΤΟ BLOG <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>

    <!-- STICKY TOP AD -->
    <div class="sticky-ad sticky-top" id="topAd">
        <button class="sticky-close" onclick="this.parentElement.classList.remove('show')"><i class="fas fa-times"></i></button>
        <ins class="adsbygoogle" style="display:block; width:100%; height:50px;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>

    <!-- HEADER -->
    <header>
        <div class="container nav">
            <div class="logo">Franklymadear<span style="color:var(--secondary);">.</span></div>
            <div class="menu">
                <a href="/"><i class="fas fa-home"></i> Αρχική</a>
                <a href="/games" class="games-btn"><i class="fas fa-gamepad"></i> FranklyGames</a>
            </div>
        </div>
    </header>

    <!-- HERO -->
    <section class="hero">
        <div class="container">
            <h1>Η Ενημέρωση Αλλιώς</h1>
            <p>Ειδήσεις &amp; Αποκλειστικά Βίντεο</p>
        </div>
    </section>

    <div class="container">

        <!-- ΑΡΘΡΑ -->
        <h2 class="section-title"><i class="far fa-newspaper"></i> Τελευταία Νέα</h2>
        <section class="posts-grid">

            <article class="post-card">
                <img src="/post/four/photo7.png" alt="SHOWBIZ" />
                <div class="post-content">
                    <span class="post-meta">12 Αυγούστου 2026</span>
                    <h2><a href="/post/four/index.html">💥 SHOWBIZ EXPLOSION</a></h2>
                    <p class="post-excerpt">10 Σοκαριστικές Αλήθειες &amp; Ανατροπές που Συμβαίνουν Τώρα!</p>
                    <a href="/post/four/index.html" class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>

            <!-- ad ενδιάμεσα -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>

            <article class="post-card">
                <img src="/post/one/photo4.png" alt="Προσωπικός Βοηθός" />
                <div class="post-content">
                    <span class="post-meta">12 Αυγούστου 2026</span>
                    <h2><a href="/post/one/index.html">Έως 1.939 ευρώ τον μήνα για τον Προσωπικό Βοηθό</a></h2>
                    <p class="post-excerpt">Σημαντικές εξελίξεις φέρνει το Υπουργείο Κοινωνικής Συνοχής.</p>
                    <a href="/post/one/index.html" class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>

            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>

            <article class="post-card">
                <img src="/post/two/photo5.png" alt="Πυρκαγιές" />
                <div class="post-content">
                    <span class="post-meta">11 Αυγούστου 2026</span>
                    <h2><a href="/post/two/index.html">🚨 ΩΡΑ ΜΗΔΕΝ: Η Ελλάδα φλέγεται</a></h2>
                    <p class="post-excerpt">Οι πύρινες φλόγες καταπίνουν τα πάντα. Κατηγορία 5.</p>
                    <a href="/post/two/index.html" class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>

            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>

            <article class="post-card">
                <img src="/post/three/photo6.png" alt="Σεισμοί" />
                <div class="post-content">
                    <span class="post-meta">10 Αυγούστου 2026</span>
                    <h2><a href="/post/three/index.html">Η θεωρία του Σοκ στον Εγκέλαδο</a></h2>
                    <p class="post-excerpt">Η χρονική και γεωγραφική σύμπτωση των φονικών σεισμών.</p>
                    <a href="/post/three/index.html" class="read-more">Διαβάστε <i class="fas fa-arrow-right"></i></a>
                </div>
            </article>
        </section>

        <!-- ΚΕΝΤΡΙΚΗ ΔΙΑΦΗΜΙΣΗ -->
        <div class="ad-container separator-ad">
            <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <!-- ΒΙΝΤΕΟ (κάθετα, όχι scroll) -->
        <h2 class="section-title"><i class="far fa-play-circle"></i> Τελευταία Βίντεο</h2>
        <div class="video-grid">

            {% for video in site.data.videos %}
            <a href="{{ video.url }}" class="video-card">
                <img src="{{ video.image }}" alt="{{ video.title }}" />
                <div class="video-content">
                    <span class="video-title">{{ video.title }}</span>
                    <span class="play-btn"><i class="fas fa-play"></i> Παρακολούθηση</span>
                </div>
            </a>

            <!-- Ενδιάμεσες διαφημίσεις (μετά το 2ο και 4ο βίντεο) -->
            {% if forloop.index == 2 or forloop.index == 4 %}
            <div class="ad-container" style="margin:0;">
                <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
            {% endif %}

            {% endfor %}

        </div>

    </div> <!-- /container -->

    <!-- STICKY BOTTOM AD -->
    <div class="sticky-ad sticky-bottom" id="bottomAd">
        <button class="sticky-close" onclick="this.parentElement.classList.remove('show')"><i class="fas fa-times"></i></button>
        <ins class="adsbygoogle" style="display:block; width:100%; height:50px;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>

    <footer>
        <div class="container">&copy; 2026 <span>Franklymadear</span> News.</div>
    </footer>

    <script>
        function enterPage() {
            document.getElementById('entryOverlay').classList.add('hidden');
            document.body.classList.add('unlocked');
            setTimeout(function() {
                document.getElementById('topAd').classList.add('show');
                document.getElementById('bottomAd').classList.add('show');
            }, 800);
        }
    </script>

</body>
</html>

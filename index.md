---
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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3186700611266549" crossorigin="anonymous"></script>

    <style>
        /* ΚΡΑΤΗΣΑ ΟΛΟ ΤΟ ΠΕΡΙΕΧΟΜΕΝΟ. ΑΛΛΑΞΑ ΜΟΝΟ ΤΟ DESIGN — dark, streaming-style (Netflix/Spotify). */
        :root {
            --bg-body: #0a0a0d;
            --bg-card: #16161c;
            --bg-card-hover: #202028;
            --primary: #ffffff;
            --accent: #e50914;
            --accent-2: #1db954;
            --text-main: #f2f2f4;
            --text-muted: #9a9aa5;
            --border: #26262f;
            --shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
            --shadow-md: 0 10px 30px rgba(0,0,0,0.55);
            --radius-lg: 16px;
            --radius-md: 10px;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: var(--bg-body); color: var(--text-main); line-height: 1.5; overflow: hidden; padding-bottom: 80px; }
        body.unlocked { overflow: auto; }
        a { text-decoration: none; color: inherit; }
        ::-webkit-scrollbar { height: 8px; width: 8px; }
        ::-webkit-scrollbar-thumb { background: #333340; border-radius: 8px; }

        /* Container */
        .container { max-width: 1100px; margin: 0 auto; padding: 0 16px; }

        /* Header - Σκούρο, sticky, Netflix-style */
        header { background: linear-gradient(180deg, rgba(6,6,8,0.97), rgba(6,6,8,0.9)); padding: 14px 0; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid var(--border); backdrop-filter: blur(10px); }
        .nav { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 22px; font-weight: 900; color: var(--primary); letter-spacing: -0.5px; text-transform: uppercase; }
        .logo span { color: var(--accent); }
        .menu a { font-weight: 700; font-size: 13px; background: rgba(255,255,255,0.06); color: var(--text-main); padding: 8px 18px; border-radius: 50px; transition: 0.2s; border: 1px solid var(--border); }
        .menu a:hover { background: var(--accent); border-color: var(--accent); color: #fff; }

        /* Hero - Cinematic banner */
        .hero { text-align: center; padding: 48px 12px 32px; background: radial-gradient(ellipse at top, rgba(229,9,20,0.15), transparent 60%); }
        .hero h1 { font-size: 32px; font-weight: 900; color: var(--primary); letter-spacing: -0.8px; }
        .hero p { font-size: 14px; color: var(--text-muted); margin-top: 6px; letter-spacing: 0.5px; text-transform: uppercase; }

        /* CTA Κουμπιά - FranklyGames / Omen */
        .cta-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; padding: 0 16px 32px; }
        .cta-btn { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; border-radius: 50px; font-weight: 800; font-size: 13.5px; letter-spacing: 0.2px; transition: 0.2s; border: 1px solid transparent; }
        .cta-btn i { font-size: 15px; }
        .cta-games { background: linear-gradient(135deg, var(--accent-2), #14933f); color: #06120a; }
        .cta-games:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(29,185,84,0.35); }
        .cta-omen { background: linear-gradient(135deg, #8b5cf6, #4c1d95); color: #fff; }
        .cta-omen:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(139,92,246,0.4); }

        /* Section Titles - σαν "σειρές" streaming */
        .section-title { font-size: 19px; font-weight: 800; margin-bottom: 20px; color: var(--primary); padding-left: 14px; position: relative; display: flex; align-items: center; gap: 10px; }
        .section-title::before { content: ''; position: absolute; left: 0; top: 2px; bottom: 2px; width: 4px; background: linear-gradient(180deg, var(--accent), var(--accent-2)); border-radius: 4px; }

        /* ΑΡΘΡΑ - Κάθετη ροή, στυλ Apple News feed */
        .posts-grid { display: flex; flex-direction: column; gap: 22px; margin-bottom: 24px; }
        .post-card { background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border); transition: 0.25s; }
        .post-card:hover { box-shadow: var(--shadow-md); background: var(--bg-card-hover); border-color: #3a3a46; }
        .post-image-wrap { position: relative; }
        .post-card img { width: 100%; height: 220px; object-fit: cover; display: block; }
        .post-avatar { position: absolute; left: 14px; bottom: -18px; width: 44px; height: 44px; border-radius: 50%; background: var(--accent); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 16px; border: 3px solid var(--bg-card); box-shadow: 0 4px 10px rgba(0,0,0,0.4); }
        .post-content { padding: 26px 16px 16px; }
        .post-card h2 { font-size: 19px; font-weight: 800; margin-bottom: 4px; line-height: 1.32; color: var(--primary); }
        .post-card h2 a:hover { color: var(--accent-2); }
        .post-excerpt { font-size: 13.5px; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 14px; }
        .post-footer-row { display: flex; align-items: center; justify-content: space-between; padding-top: 10px; border-top: 1px solid var(--border); }
        .post-source { display: flex; align-items: center; gap: 8px; }
        .source-icon { width: 22px; height: 22px; border-radius: 50%; background: var(--accent); color: #fff; font-size: 11px; font-weight: 900; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .source-name { font-size: 12.5px; font-weight: 700; color: var(--text-main); }
        .post-time { font-size: 12px; color: var(--text-muted); }
        .post-actions { display: flex; align-items: center; gap: 4px; }
        .icon-btn { background: none; border: none; color: var(--text-muted); font-size: 15px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 50%; cursor: pointer; transition: 0.2s; }
        .icon-btn:hover { background: rgba(255,255,255,0.06); color: var(--text-main); }
        .icon-btn.liked { color: var(--accent); }
        .icon-btn.liked i { font-weight: 900; }

        /* ΔΙΑΦΗΜΙΣΕΙΣ - Διακριτικές, σκούρες */
        .ad-container { margin: 8px 0 16px; width: 100%; background: #101014; border-radius: var(--radius-md); text-align: center; padding: 16px; border: 1px dashed #33333d; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .ad-container::before { content: 'ΔΙΑΦΗΜΙΣΗ'; font-size: 10px; color: #5a5a66; font-weight: 700; display: block; margin-bottom: 6px; letter-spacing: 1px; }
        .separator-ad { margin-top: 24px; margin-bottom: 24px; }
        .posts-grid + .ad-container, .video-grid .ad-container { flex: 0 0 auto; width: 100%; }

        /* ΒΙΝΤΕΟ - Τετράγωνες κάρτες, scroll προς τα δεξιά */
        .video-grid { display: flex; flex-direction: row; overflow-x: auto; gap: 14px; margin-bottom: 20px; padding-bottom: 8px; scroll-snap-type: x proximity; -webkit-overflow-scrolling: touch; }
        .video-card { background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border); display: block; transition: 0.25s; flex: 0 0 160px; width: 160px; scroll-snap-align: start; }
        .video-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); border-color: #3a3a46; }
        .video-thumb { position: relative; width: 100%; aspect-ratio: 1 / 1; overflow: hidden; }
        .video-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; filter: brightness(0.8); transition: 0.3s; }
        .video-card:hover .video-thumb img { filter: brightness(1); transform: scale(1.06); }
        .video-play-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
        .video-play-overlay i { width: 42px; height: 42px; border-radius: 50%; background: rgba(0,0,0,0.55); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 15px; border: 2px solid rgba(255,255,255,0.65); transition: 0.2s; }
        .video-card:hover .video-play-overlay i { background: var(--accent-2); color: #06120a; border-color: var(--accent-2); }
        .video-content { padding: 10px 10px 12px; }
        .video-title { font-weight: 700; font-size: 12.5px; color: var(--primary); line-height: 1.3; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

        /* POP UP ΕΙΣΟΔΟΥ - Netflix splash style */
        .entry-overlay { position: fixed; inset: 0; background: radial-gradient(ellipse at center, rgba(30,4,6,0.96), rgba(4,4,6,0.98)); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 99999; padding: 20px; transition: opacity 0.4s ease, visibility 0.4s ease; }
        .entry-overlay.hidden { opacity: 0; visibility: hidden; }
        .entry-modal { background: var(--bg-card); padding: 28px; border-radius: var(--radius-lg); text-align: center; max-width: 400px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.7); border: 1px solid var(--border); border-top: 4px solid var(--accent); }
        .entry-modal h2 { color: var(--primary); font-size: 24px; font-weight: 900; margin-bottom: 16px; }
        .btn-enter { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; margin-top: 16px; padding: 16px; font-size: 15px; font-weight: 800; color: #fff; border-radius: 50px; border: none; cursor: pointer; background: var(--accent); transition: 0.2s; }
        .btn-enter:hover { background: #ff0a17; transform: scale(1.02); }

        /* STICKY ADS */
        .sticky-ad { position: fixed; left: 0; width: 100%; background: #101014; padding: 6px; box-shadow: 0 -4px 20px rgba(0,0,0,0.5); z-index: 9999; text-align: center; display: flex; justify-content: center; transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); border-color: var(--border); }
        .sticky-top { top: 0; transform: translateY(-100%); border-bottom: 2px solid var(--accent); }
        .sticky-top.show { transform: translateY(0); }
        .sticky-bottom { bottom: 0; transform: translateY(100%); border-top: 2px solid var(--accent); }
        .sticky-bottom.show { transform: translateY(0); }
        .sticky-close { position: absolute; background: var(--accent); color: #fff; border: none; width: 26px; height: 26px; border-radius: 50%; font-size: 12px; cursor: pointer; top: -13px; right: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.4); transition: 0.2s; }
        .sticky-close:hover { transform: scale(1.1); }

        /* FOOTER */
        footer { text-align: center; padding: 28px 16px; background: #050506; color: var(--text-muted); font-size: 13px; margin-top: 20px; border-top: 1px solid var(--border); }
        footer span { color: var(--accent); font-weight: 800; }

        /* DESKTOP/TABLET */
        @media (min-width: 600px) {
            .video-card { flex: 0 0 190px; width: 190px; }
        }
    </style>
</head>
<body>
    <!-- Οθόνη Υποδοχής -->
    <div class="entry-overlay" id="entryOverlay">
        <div class="entry-modal">
            <h2>Franklymadear <span>News</span></h2>
            <div style="min-height: 200px; border-radius:12px; border:1px solid #e2e8f0; display:flex; align-items:center; justify-content:center; background:#f8fafc;">
                <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
            <button class="btn-enter" onclick="enterPage()">ΣΥΝΕΧΕΙΑ ΣΤΟ BLOG <i class="fas fa-arrow-right"></i></button>
        </div>
    </div>

    <!-- Sticky Διαφήμιση Πάνω -->
    <div class="sticky-ad sticky-top" id="topAd">
        <button class="sticky-close" onclick="this.parentElement.classList.remove('show')"><i class="fas fa-times"></i></button>
        <ins class="adsbygoogle" style="display:block; width:100%; height:50px;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
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
        <a href="https://t.me/omenread_bot/omen" target="_blank" rel="noopener" class="cta-btn cta-omen"><i class="fas fa-moon"></i> Omen Καφεμαντεία</a>
    </div>

    <div class="container">
        <!-- ΕΝΟΤΗΤΑ 1: ΑΡΘΡΑ -->
        <h2 class="section-title"><i class="far fa-newspaper"></i> Τελευταία Νέα</h2>
        <section class="posts-grid">
            
            <!-- Άρθρο 1 -->
            <article class="post-card">
                <div class="post-image-wrap">
                    <img src="/post/four/photo7.png" alt="SHOWBIZ">
                    <div class="post-avatar">F</div>
                </div>
                <div class="post-content">
                    <h2><a href="/post/four/index.html">💥 SHOWBIZ EXPLOSION</a></h2>
                    <p class="post-excerpt">10 Σοκαριστικές Αλήθειες & Ανατροπές που Συμβαίνουν Τώρα!</p>
                    <div class="post-footer-row">
                        <div class="post-source">
                            <span class="source-icon">F</span>
                            <span class="source-name">Franklymadear</span>
                            <span class="post-time">· 12 Αυγ</span>
                        </div>
                        <div class="post-actions">
                            <button class="icon-btn" onclick="toggleLike(this)"><i class="far fa-heart"></i></button>
                            <button class="icon-btn" onclick="shareArticle('/post/four/index.html')"><i class="fas fa-arrow-up-from-bracket"></i></button>
                            <a href="/post/four/index.html" class="icon-btn"><i class="fas fa-ellipsis"></i></a>
                        </div>
                    </div>
                </div>
            </article>

            <!-- 1η Διαφήμιση -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>

            <!-- Άρθρο 2 -->
            <article class="post-card">
                <div class="post-image-wrap">
                    <img src="/post/one/photo4.png" alt="Προσωπικός Βοηθός">
                    <div class="post-avatar">F</div>
                </div>
                <div class="post-content">
                    <h2><a href="/post/one/index.html">Έως 1.939 ευρώ τον μήνα για τον Προσωπικό Βοηθό</a></h2>
                    <p class="post-excerpt">Σημαντικές εξελίξεις φέρνει το Υπουργείο Κοινωνικής Συνοχής.</p>
                    <div class="post-footer-row">
                        <div class="post-source">
                            <span class="source-icon">F</span>
                            <span class="source-name">Franklymadear</span>
                            <span class="post-time">· 12 Αυγ</span>
                        </div>
                        <div class="post-actions">
                            <button class="icon-btn" onclick="toggleLike(this)"><i class="far fa-heart"></i></button>
                            <button class="icon-btn" onclick="shareArticle('/post/one/index.html')"><i class="fas fa-arrow-up-from-bracket"></i></button>
                            <a href="/post/one/index.html" class="icon-btn"><i class="fas fa-ellipsis"></i></a>
                        </div>
                    </div>
                </div>
            </article>

            <!-- 2η Διαφήμιση -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>

            <!-- Άρθρο 3 -->
            <article class="post-card">
                <div class="post-image-wrap">
                    <img src="/post/two/photo5.png" alt="Πυρκαγιές">
                    <div class="post-avatar">F</div>
                </div>
                <div class="post-content">
                    <h2><a href="/post/two/index.html">🚨 ΩΡΑ ΜΗΔΕΝ: Η Ελλάδα φλέγεται</a></h2>
                    <p class="post-excerpt">Οι πύρινες φλόγες καταπίνουν τα πάντα. Κατηγορία 5.</p>
                    <div class="post-footer-row">
                        <div class="post-source">
                            <span class="source-icon">F</span>
                            <span class="source-name">Franklymadear</span>
                            <span class="post-time">· 11 Αυγ</span>
                        </div>
                        <div class="post-actions">
                            <button class="icon-btn" onclick="toggleLike(this)"><i class="far fa-heart"></i></button>
                            <button class="icon-btn" onclick="shareArticle('/post/two/index.html')"><i class="fas fa-arrow-up-from-bracket"></i></button>
                            <a href="/post/two/index.html" class="icon-btn"><i class="fas fa-ellipsis"></i></a>
                        </div>
                    </div>
                </div>
            </article>

            <!-- 3η Διαφήμιση -->
            <div class="ad-container"><ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>

            <!-- Άρθρο 4 -->
            <article class="post-card">
                <div class="post-image-wrap">
                    <img src="/post/three/photo6.png" alt="Σεισμοί">
                    <div class="post-avatar">F</div>
                </div>
                <div class="post-content">
                    <h2><a href="/post/three/index.html">Η θεωρία του Σοκ στον Εγκέλαδο</a></h2>
                    <p class="post-excerpt">Η χρονική και γεωγραφική σύμπτωση των φονικών σεισμών.</p>
                    <div class="post-footer-row">
                        <div class="post-source">
                            <span class="source-icon">F</span>
                            <span class="source-name">Franklymadear</span>
                            <span class="post-time">· 10 Αυγ</span>
                        </div>
                        <div class="post-actions">
                            <button class="icon-btn" onclick="toggleLike(this)"><i class="far fa-heart"></i></button>
                            <button class="icon-btn" onclick="shareArticle('/post/three/index.html')"><i class="fas fa-arrow-up-from-bracket"></i></button>
                            <a href="/post/three/index.html" class="icon-btn"><i class="fas fa-ellipsis"></i></a>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <!-- ΚΕΝΤΡΙΚΗ ΔΙΑΦΗΜΙΣΗ -->
        <div class="ad-container separator-ad">
            <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        <!-- ΕΝΟΤΗΤΑ 2: ΒΙΝΤΕΟ (ΔΥΝΑΜΙΚΑ ΑΠΟ ΤΟ _data/videos.yml) -->
        <h2 class="section-title"><i class="far fa-play-circle"></i> Τελευταία Βίντεο</h2>
        <section class="video-grid">
            
            {% for video in site.data.videos %}
            <a href="{{ video.url }}" class="video-card">
                <div class="video-thumb">
                    <img src="{{ video.image }}" alt="{{ video.title }}">
                    <span class="video-play-overlay"><i class="fas fa-play"></i></span>
                </div>
                <div class="video-content">
                    <span class="video-title">{{ video.title }}</span>
                </div>
            </a>

            <!-- Διαφήμιση μετά το 1ο και 3ο βίντεο -->
            {% if forloop.index == 1 or forloop.index == 3 %}
            <div class="ad-container">
                <ins class="adsbygoogle" style="display:block; width:100%;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
            {% endif %}

            {% endfor %}

        </section>
    </div>

    <!-- Sticky Διαφήμιση Κάτω -->
    <div class="sticky-ad sticky-bottom" id="bottomAd">
        <button class="sticky-close" onclick="this.parentElement.classList.remove('show')"><i class="fas fa-times"></i></button>
        <ins class="adsbygoogle" style="display:block; width:100%; height:50px;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-3186700611266549" data-ad-slot="5220069446"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>

    <footer><div class="container">&copy; 2026 <span>Franklymadear</span> News.</div></footer>

    <script>
        function enterPage() {
            document.getElementById('entryOverlay').classList.add('hidden');
            document.body.classList.add('unlocked');
            setTimeout(() => {
                document.getElementById('topAd').classList.add('show');
                document.getElementById('bottomAd').classList.add('show');
            }, 800);
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
            }
        }
    </script>
</body>
</html>

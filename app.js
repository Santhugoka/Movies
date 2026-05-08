// Updated Video Data with your provided links
const rawVideoData = [
  {
    category: "Andhera (2025)",
    type: "series",
    poster: "https://m.media-amazon.com/images/M/MV5BNWNiZTNkOWMtNTg1Yy00YTE4LWFlMDgtZWEzYWE5YWVhM2ZkXkEyXkFqcGc@._V1_.jpg",
    banner: "https://m.media-amazon.com/images/S/pv-target-images/72141143d460b74d7adf8c8b2e97b53b0e0fb16c72fe8121a48b6d398d190e4d.jpg",
    genre: "Horror / Mystery",
    rating: "4.7",
    desc: "A dark mystery unfolding in the shadows of an ancient city.",
    videos: [
      ["Andhera S01 E01", "19ac1xh_UoD5Dz0CE4OBk-Mw1UMjSbmUh"],
      ["Andhera S01 E02", "1DmqEtO8CGLf8Y9Ri5G7wz4J_eFOQ-ygi"],
      ["Andhera S01 E03", "1bReaSayZFvy88m2Uni-8JqsKgdVIYEJy"],
      ["Andhera S01 E04", "1iefOF-9Tv93P6-pJaq3VOfVAyxmPXMMv"],
      ["Andhera S01 E05", "1ytW7zRhOMCwgIC5BCcI_LlQbXJ8n8XdM"],
      ["Andhera S01 E06", "12Qf3A5CGcyoIOW-6eyS-g-EpeL0jdb5q"],
      ["Andhera S01 E07", "14Cyp7KOX4XgMOaVj5_a9q5OiciDw5_ta"],
      ["Andhera S01 E08", "1Rh1Ew9ixoM2exSQnmbetw_5HcYNTyjxv"]
    ]
  },
  {
    category: "Chiraiya (2026)",
    type: "series",
    poster: "https://pbs.twimg.com/media/HG4gBkJaAAAt7Gs.jpg",
    banner: "https://i.ytimg.com/vi/xa2v0noUq9E/maxresdefault.jpg",
    genre: "Drama / Social",
    rating: "4.5",
    desc: "A heart-touching story of resilience and hope in modern India.",
    videos: [
      ["Chiraiya EP 01", "1Eflg_KntZ78M3MF85KFMnUBE--rHQrum"],
      ["Chiraiya EP 02", "17K5oRlzXWzcnm_j0gsRbd0_AwXXLdOLQ"],
      ["Chiraiya EP 03", "1c_W994e3svo95qXolt6aBzAhcBa67HtN"],
      ["Chiraiya EP 04", "1OI3jaMtv4WR6xzGYCXb9l0yqTMiGHLF_"],
      ["Chiraiya EP 05", "1K-XK4WCwIa9Urutfo63-vMygmVIryzHr"],
      ["Chiraiya EP 06", "1VHF5VtUzRUFxAleWSdxxzPsVE_viHeg-"]
    ]
  },
  {
    category: "Glory (2026)",
    type: "series",
    poster: "https://m.media-amazon.com/images/M/MV5BNWFhM2E5M2EtZTNlYS00YmFlLWJkOTgtMmE4ZDE4ODJhZGE3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner: "https://images.moneycontrol.com/static-mcnews/2026/05/20260501133519_glory.jpg?impolicy=website&width=1600&height=900",
    genre: "Sports / Drama",
    rating: "4.8",
    desc: "The rise of a young athlete against all odds in the pursuit of ultimate glory.",
    videos: [
      ["Glory S01 EP 01", "1VMTwPhGDiUcqsdKA76pwXzIxur0qxUc5"],
      ["Glory S01 EP 02", "1XjqtcWdOX8V-e09JeE06KhswwpGIqRja"],
      ["Glory S01 EP 03", "1Vcq4bOqEY3EyeraXtbR6StSKspRO--jG"],
      ["Glory S01 EP 04", "1O-dUd58b5b-oIr8wC85yP8WvWU4zgTBG"],
      ["Glory S01 EP 05", "1rrigIicWFFR1zUVufdReHYYpaLVzNkQX"],
      ["Glory S01 EP 06", "1aShNWTBypPwVJGsy8aofXG5gkS6Z5gdw"],
      ["Glory S01 EP 07", "1StSCsGW_rbhMiw7VyNESEAE1LgrkhTiv"]
    ]
  },
  {
    category: "Kurukshetra (2025) S01",
    type: "series",
    poster: "https://media.themoviedb.org/t/p/w500/amNFukSD0hpj5omLkikfaNw42sp.jpg",
    banner: "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2025/09/fileimage-2025-09-10t150829-1757497130.webp",
    genre: "Epic Action / History",
    rating: "4.9",
    desc: "A modern retelling of the greatest battle ever fought.",
    videos: [
      ["Kurukshetra S01 E01", "1ZYXHb-t04P9c44mNaiVt1oj3Mf9YUcXJ"],
      ["Kurukshetra S01 E02", "16DPaPxWVJCYgScuui7Upr2sdo8D4ZXQU"],
      ["Kurukshetra S01 E03", "1hbzIyPz_95CaHtInDYEGrhQpveXq-F8C"],
      ["Kurukshetra S01 E04", "1xoCLR_GMThbkfJPjFfXczOA1CpCTOirO"],
      ["Kurukshetra S01 E05", "1KpaYjv4s2dvADHf41cpM4TJ8u4Sr9yt5"],
      ["Kurukshetra S01 E06", "1tT766pqZklc5VnB9UlQJtqJX97hqUWtL"],
      ["Kurukshetra S01 E07", "1whb7a5D-YaJqeJYrZ8xL0niMD2i2MQ7r"],
      ["Kurukshetra S01 E08", "1oTx6w6aq5uO6zI-hdA_fdxCTjzbP3C_H"],
      ["Kurukshetra S01 E09", "1ZgCOQAcYKIZ4_vfIXir9kRV7E4yU3NSA"],
      ["Kurukshetra S01 E10", "1AfN9mJ1Rz2QgNsYIA_AEU5RYjoZOhG9P"],
      ["Kurukshetra S01 E11", "1wrRoz2CXvGyMv7b32M9lDDM-s49lixrG"],
      ["Kurukshetra S01 E12", "11oHFaRp-nzzSlCXDgkDKnGoU_MbGN0BZ"],
      ["Kurukshetra S01 E13", "1x0hw8zkHZCSm1VxN6eyPK8eIyhBm6ng5"],
      ["Kurukshetra S01 E14", "1CkmqPYMqTUwceEFqOVz4TIUxZnpavE2d"],
      ["Kurukshetra S01 E15", "1Lx1AIKGCgHe4HEq9DQg-_kHm7A6q8v4I"],
      ["Kurukshetra S01 E16", "10IB9S7xzjUtVCi-fH0b-4wTEMm29ONBc"],
      ["Kurukshetra S01 E17", "1tmqh-66hPozc_CxT_U9vBw1dHZ-u9Q3Q"],
      ["Kurukshetra S01 E18", "1bqQ9m5TyIhLc_Wkc9jlOhm1AGf4v4wc6"]
    ]
  },
  {
    category: "Matka King (2026)",
    type: "series",
    poster: "https://dwnjscqilqpcr.cloudfront.net/assets/uploads/posts_large/2026/5/1778193256_Matka%20King.jpeg",
    banner: "https://m.media-amazon.com/images/S/pv-target-images/3aef233f177c571a7e33e8c6af62700c8af7ca54980ea89f719dd7a35f99d05f.jpg",
    genre: "Crime / Thriller",
    rating: "4.8",
    desc: "The rise of a gambling empire in the heart of Mumbai.",
    videos: [
      ["Matka King EP 01", "1ExS8rx1mRDAV4mLeKxIygiagLQsfSC2a"],
      ["Matka King EP 02", "1Ws8EGKNJQblizzaPx9Jx16anxksfEtMo"],
      ["Matka King EP 03", "1Q9X_rTC1tsFYLkktejiB8l9GSp6p_b-u"],
      ["Matka King EP 04", "1rgFP3KmKR_RQQCgudcthomMMttMYXl4O"],
      ["Matka King EP 05", "1ox99L8XRe2BecUVsBzPasPloBaKXUlca"],
      ["Matka King EP 06", "1iV2Ws8P0cw7XjJrdy_LZDwRJrfFt1pUp"],
      ["Matka King EP 07", "1Sy0QFEZ-Z-Pgf015VHy-Fk4eh8BRFTgU"],
      ["Matka King EP 08", "18IzqnFUxiBkpYHrdq__Hi1VBMorMct8e"]
    ]
  }
];

const rawMovies = {
  category: "Latest Movies",
  type: "movie",
  videos: [
    {
      title: "Dhurandhar The Revenge (2026)",
      id: "1iTPiTAA1XI2HosxoM1rmOweSh8P7jhqO",
      poster: "https://m.media-amazon.com/images/M/MV5BY2ZiODdiMzMtYzU2Yy00ZWNlLWIyNGQtZjc0ZmFhZGRkNjZhXkEyXkFqcGc@._V1_.jpg",
      banner: "https://i.ytimg.com/vi/CN0lNff-zm0/maxresdefault.jpg"
    },
    {
      title: "Band Melam (2026)",
      id: "1n31ZMDEx6eaVXRLbN7vZSp86Kk2KHHJu",
      poster: "https://c.saavncdn.com/353/Band-Melam-Title-OST-From-Band-Melam-Telugu-2026-20260218141803-500x500.jpg",
      banner: "https://cdn.district.in/movies-assets/images/cinema/Band-Melam_Horizontal_Poster2-18867bb0-1adc-11f1-9b97-9fe8ccbc983f.jpg?im=Resize,width=720"
    },
    {
      title: "Bhartha Mahasayulaku Wignyapthi (2026)",
      id: "1UQb0rBoMRLDZJCiJV5XL29xNWy1XsEHg",
      poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bhartha-mahasayulaku-wignyapthi-et00472594-1768195821.jpg",
      banner: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/bhartha-mahasayulaku-wignyapthi-et00472594-1768195821.jpg"
    },
    {
      title: "Biker (2026)",
      id: "17Nmkx-CYjrjBRnBJW4E8YZi4G32owoRH",
      poster: "https://m.media-amazon.com/images/M/MV5BMDRjOGQ1MGQtZjAzNS00NzliLWIxZGUtY2U1ODgzYTQ3MmU0XkEyXkFqcGc@._V1_.jpg",
      banner: "https://assets-in.bmscdn.com/discovery-catalog/events/et00469257-wrlrlmxbjd-landscape.jpg"
    },
    {
      title: "Couple Friendly (2026)",
      id: "1z8ssJ0UVbx1KwsK8pAegSSgy5XGmqCA0",
      poster: "https://a.ltrbxd.com/resized/film-poster/1/3/1/8/2/4/3/1318243-couple-friendly-0-230-0-345-crop.jpg?v=6d3d08f8d1",
      banner: "https://cdn.district.in/movies-assets/images/cinema/Couple-Friendly_Horizontal_Poster2-34922f70-7839-11f0-8df3-db01d1baa444.jpg?im=Resize,width=720"
    },
    {
      title: "Dacoit A Love Story (2026)",
      id: "1OoDWoPYTG2ny6DtkVqNkjtsoPemVoonQ",
      poster: "https://m.media-amazon.com/images/M/MV5BYTY4MGVmOGYtMDdlZC00ODM0LWIyMWMtMTkxNWMzMTczOGUwXkEyXkFqcGc@._V1_.jpg",
      banner: "https://static.toiimg.com/photo/130060676.jpeg"
    },
    {
      title: "Dhurandhar (2025)",
      id: "1aHw6mFV3uM2tyDVbsv6wo8QxV_v-3A5y",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2NzEMBZbaPjaYx84gdiXju6x5nU3hjmAlA&s",
      banner: "https://images.ottplay.com/images/dhurandhar-2025-poster-detail-1764949115.jpg?impolicy=ottplay-202501_high&width=1200&height=675"
    },
    {
      title: "Falaknuma Das (2019)",
      id: "1W8elvOqy15T8BCyXSpWz7qLJMZ3CRF1f",
      poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/falaknuma-das-et00101008-17-04-2019-03-03-47.jpg",
      banner: "https://survi.in/wp-content/uploads/2019/05/Survi-Review-Falaknuma-Das-Rating-1024x512.jpg"
    },
    {
      title: "Happy Raj (2026)",
      id: "1knIodimrtV_zDJMaZe5wbAiMp28b8u1d",
      poster: "https://cdn.district.in/movies-assets/images/cinema/Happy-Raj-75a815c0-ddbe-11f0-a360-f384e99feb0b.jpg",
      banner: "https://lk-aps.bmscdn.com/events/mobile/happy-raj-et00006023-13-03-2026-03-23-05.jpg"
    },
    {
      title: "Lee Cronin's The Mummy (2026)",
      id: "1lsAEJO8kXe_RbWg93Omj3hEGUKojvLQj",
      poster: "https://m.media-amazon.com/images/M/MV5BNDhlNTAyYTgtOGRmZS00ZmE0LTk4ZTUtMjk3ZjZhMWE4YWY0XkEyXkFqcGc@._V1_.jpg",
      banner: "https://cdn.district.in/movies-assets/images/cinema/_Horizontal_Lee-Cronin_s-The-Mummy-13129fa0-395f-11f1-840e-63804c65ce25.jpg?im=Resize,width=720"
    },
    {
      title: "Lockdown (2026)",
      id: "1xICiYs_h6IiPR-u0_HKOHaxFP78fcIBU",
      poster: "https://m.media-amazon.com/images/M/MV5BNjgyZjQ4ZjItZmJlYy00MWQ1LWFhNzYtZjUzZDM0ZjA0NTJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdNR_RHTO3EdWkJvqaMrX6_j3UWJpx-BFIig&s"
    },
    {
      title: "Love Insurance Kompany (2026)",
      id: "1gTpMGJZM6w5PyLbYfl3WYdmJCFHjJs3C",
      poster: "https://cdn.district.in/movies-assets/images/cinema/LIK-new-1f40ad00-3318-11f1-a005-63882a91c638.jpg",
      banner: "https://filmy-charcha.s3.ap-south-1.amazonaws.com/filmy-charcha/Movies/Love%20Insurance%20Kompany%202026%20Movie%20Release%20Date,%20Cast,%20Director,%20Story,%20Budget%20%20More_1768819861969.webp"
    },
    {
      title: "Made in Korea (2026)",
      id: "1455GUHtIoOaHc4VqYOF0gQOcOwX5bNzV",
      poster: "https://m.media-amazon.com/images/M/MV5BNWFhNjliYTctNTgyOS00YWM5LTg5OTctNTgwNDM3YTJkMjFkXkEyXkFqcGc@._V1_.jpg",
      banner: "https://i.ytimg.com/vi/RmLegZv1TZk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJzhv4cyPElLd1sgbejbVn_G2_uA"
    },
    {
      title: "Papam Prathap (2026)",
      id: "1FkP1mzXBzIA1dEgeqMN5IjHQjc2qUqaY",
      poster: "https://cdn.district.in/movies-assets/images/cinema/Papam-Prathap-1c620c00-37d7-11f1-840e-63804c65ce25.jpeg",
      banner: "https://cdn.district.in/movies-assets/images/cinema/Papam-Prathap-cover-6e61aca0-37d6-11f1-840e-63804c65ce25.jpg"
    },
    {
      title: "Project-Hail.Mary (2026)",
      id: "1QZRFGUjtFwqR6Y7OT2BvomVuIroiG6EO",
      poster: "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_.jpg",
      banner: "https://litfind.bookscape.com/wp-content/uploads/2025/07/project-hail-mary-book-to-movie.jpg"
    },
    {
      title: "Raakaasa (2026)",
      id: "1eVI0TlGRNjlO9I84DHvDKJId2fFXFE_W",
      poster: "https://cdn.district.in/movies-assets/images/cinema/Rakasa-802b25c0-2759-11f1-9893-43b149c11632.jpg",
      banner: "https://i.ytimg.com/vi/TJ5dpuZ1cAk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDqacJDIhLMIpIypwSMviNkFStXUg"
    },
    {
      title: "S.Saraswathi (2026)",
      id: "1v9VaYx4Pxw92ks6-Qex-i2YgYlTdE5Vb",
      poster: "https://cdn.district.in/movies-assets/images/cinema/S.Saraswathi_Poster-5d5515e0-17b6-11f1-9ea8-c7ed2a8658b9.jpg?im=Resize,width=400",
      banner: "https://static.10tv.in/wp-content/uploads/2026/03/saraswathi-review.jpg"
    },
    {
      title: "Sabdham (2025)",
      id: "1XtlhGJNvL-cm8-w6kyFr5h7pm6JiYl2F",
      poster: "https://m.media-amazon.com/images/M/MV5BYTBhYjc3NmMtMWNjZi00MWQ0LWExN2ItYjI1MzE2ZjFkZDIwXkEyXkFqcGc@._V1_.jpg",
      banner: "https://i.ytimg.com/vi/Cp0d6oAT1qc/maxresdefault.jpg"
    },
    {
      title: "Sambavam Adhyayam Onnu (2026)",
      id: "1o1gz94VGXjHN9KJcSxmULV7co2Gwxxyy",
      poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sambhavam-adhyayam-onnu-et00489555-1772252741.jpg",
      banner: "https://assets-in.bmscdn.com/discovery-catalog/events/et00489555-bhvwkhbwrv-landscape.jpg"
    },
    {
      title: "Suyodhana (2026)",
      id: "1UKllrYgXBBsJAUCGlLVZYHqITYODq__C",
      poster: "https://m.media-amazon.com/images/S/pv-target-images/35c08d10cf64df356f2eb2f5e1bc56f744db4030faa463c5513979dae8393909.jpg",
      banner: "https://img.airtel.tv/unsafe/fit-in/1600x0/filters:format(webp)/https://xstreamcp-assets-msp.streamready.in/assets/HOTSTAR_DTH/MOVIE/69e008a7b37d253ec55a5234/images/LANDSCAPE_169/1776350812482-h?o=production"
    },
    {
      title: "Swapped (2026)",
      id: "1tGRTPNGVRaDkRanUBxOceLYF1GG33KKN",
      poster: "https://m.media-amazon.com/images/M/MV5BMDFmZjliMTAtYzQxMC00YmQwLTg2NjUtZjAyMDVhMTY3ZjIzXkEyXkFqcGc@._V1_.jpg",
      banner: "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABc73oj9KEfFjYhaxEXJy0pefgWBmi5fAXQNEwC4qWjQfW_x1ev3z8Rdapl7U7U1T231BK-z11rT4m-WuU6L49Ezszz7U4oC31muE.jpg?r=136"
    },
    {
      title: "Thaai Kizhavi (2026)",
      id: "18fB518XgMxLEO4LzDa1aAGk4sczfP41S",
      poster: "https://m.media-amazon.com/images/M/MV5BN2RkNjliNTYtZWYwYy00YTZlLWEzMDQtZGVlNTgxYzJhYzRkXkEyXkFqcGc@._V1_.jpg",
      banner: "https://assets-in.bmscdn.com/discovery-catalog/events/et00488859-qfwunqhpxt-landscape.jpg"
    },
    {
      title: "The Kerala Story 2 Goes Beyond (2026)",
      id: "1E2qBJq7_P380ud4A99KUNeWQ5_5LLe7s",
      poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-kerala-story-2-goes-beyond-et00484171-1770209319.jpg",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFL2dB4EGtc8U1cd68G0lyUFg7lDprnK7J2Q&s"
    },
    {
      title: "Tu.Yaa.Main (2026)",
      id: "1AJ9uQnIe3Y86yTDSSz_aQ4HI03JpKHmR",
      poster: "https://m.media-amazon.com/images/M/MV5BMjdiMjk1ZTYtMGE3MC00YjIxLWFkNTEtZDJhOTY0M2JjODVlXkEyXkFqcGc@._V1_.jpg",
      banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOapzkSZcRCqPh8tsXfQrwm9BzIQExnlQdQ&s"
    },
    {
      title: "Ustaad Bhagat Singh (2026)",
      id: "1X4WqI7pBrwqlTm7dDu0_IHgZj266RWkH",
      poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ustaad-bhagat-singh-et00339939-1771925113.jpg",
      banner: "https://assets-in.bmscdn.com/discovery-catalog/events/et00339939-qqrfuewbrd-landscape.jpg"
    },
    {
      title: "Vaazha II Biopic of a Billion Bros (2026)",
      id: "1ZEKe35bVw25_dHiHekgwGHZ3O8OYnO9s",
      poster: "https://m.media-amazon.com/images/M/MV5BNzQ5MmNhMWEtMTkzZi00ZDE3LWFhMTItNzZlYmE5Yjc5MTE5XkEyXkFqcGc@._V1_.jpg",
      banner: "https://i.ytimg.com/vi/5l3fNqsYmlc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCTAVHzTNwAtAoWqVRN6J9y7bCWoQ"
    },
    {
      title: "Vishnu Vinyasam (2026)",
      id: "1oK_nwLRjS1jEosF7D7f7IOMeBtNeAxM4",
      poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vishnu-vinyasam-et00487219-1772008232.jpg",
      banner: "https://assets-in.bmscdn.com/discovery-catalog/events/et00487219-gyhpqfccbn-landscape.jpg"
    },
    {
      title: "With Love (2026)",
      id: "1nGah3JkvT2mo_-5ad0dzYpA-MIKpkwUW",
      poster: "https://m.media-amazon.com/images/M/MV5BNDBkNzliYTMtYzEwOC00ZmVlLWFlYTgtNmQ2Zjg3N2EyMmE1XkEyXkFqcGc@._V1_.jpg",
      banner: "https://assets-in.bmscdn.com/discovery-catalog/events/et00484567-amgcpzfmfe-landscape.jpg"
    },
    {
      title: "Youth (2026)",
      id: "1PKwz5XkKmHwJEWBkKD6MTuD3T53Yxsqu",
      poster: "https://m.media-amazon.com/images/M/MV5BN2Q4MDRlMjItNWY5ZC00MGIxLTg3MGQtYTdlOTE5MTY1N2M1XkEyXkFqcGc@._V1_.jpg",
      banner: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/youth-et00485590-1770616504.jpg"
    }
  ]
};

// Internal Data Mapping
const videoData = {
    movies: rawMovies.videos.map((m, idx) => ({
        id: m.id.trim(), // Trim IDs to prevent playback issues
        internalId: 'm' + idx,
        title: m.title.trim(),
        year: m.title.match(/\((.*?)\)/)?.[1] || '2026',
        duration: '2h 15m',
        rating: '4.5',
        genre: 'Action / Drama',
        poster: m.poster,
        banner: m.banner,
        desc: 'A blockbuster cinematic experience from the ' + m.title + ' universe.',
        cast: 'Lead Ensemble',
        quality: '4K Ultra HD'
    })),
    series: rawVideoData.map((s, idx) => ({
        id: 's' + idx,
        title: s.category.trim(),
        year: s.category.match(/\((.*?)\)/)?.[1] || '2025',
        episodes: s.videos.length,
        genre: s.genre || 'Drama / Mystery',
        rating: s.rating || '4.7',
        poster: s.poster,
        banner: s.banner,
        desc: s.desc || 'A gripping suspense series that explores the depths of human fear and the unknown.',
        epList: s.videos.map(v => ({
            title: v[0].trim(),
            id: v[1].trim(), // Trim episode IDs
            duration: '45m'
        }))
    }))
};

// State Management
let currentScreen = 'home-screen';
let prevScreen = 'home-screen';
let watchlist = []; 
let downloads = [];
let isDarkMode = localStorage.getItem('theme') === 'dark';

// Theme Management
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcons();
}

function updateThemeIcons() {
    const icons = document.querySelectorAll('.theme-toggle');
    icons.forEach(icon => {
        icon.className = isDarkMode ? 'fa-solid fa-sun theme-toggle' : 'fa-solid fa-moon theme-toggle';
    });
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    updateThemeIcons();
    renderHome();
    renderMovies();
    renderSeries();
    currentScreen = 'home-screen';
});

function switchScreen(screenId) {
    if (screenId === currentScreen) return;
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-screen') === screenId);
    });
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        prevScreen = currentScreen;
        currentScreen = screenId;
    }
    if (screenId === 'downloads-screen') renderDownloads();
}

function renderHome() {
    const item = videoData.series[0]; // Andhera
    const isSeries = true;
    const playId = isSeries ? item.epList[0].id : item.id;
    
    // Clear and re-render hero
    const heroContent = document.getElementById('hero-banner-content');
    heroContent.innerHTML = `
        <div class="hero-details" style="padding-bottom: 40px;">
            <div class="hero-tag">${isSeries ? 'Web Series' : 'New Movie'}</div>
            <div class="hero-title">${item.title}</div>
            <div class="hero-meta">${item.year} • ${item.genre}</div>
            <div class="hero-btns">
                <button class="btn btn-primary" onclick="playVideo('${item.title}', '${playId}')">
                    <i class="fa-solid fa-play"></i> Play Now
                </button>
                <button class="btn btn-secondary" onclick="openDetail('${item.id}', '${isSeries ? 'series' : 'movies'}')">
                    <i class="fa-solid fa-circle-info"></i> Details
                </button>
            </div>
        </div>
        <div class="hero-overlay"></div>
        <img src="${item.banner}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0; z-index: 1;">
    `;

    document.getElementById('trending-list').innerHTML = videoData.movies.slice(0, 6).map(item => createVideoCard(item)).join('');
    document.getElementById('recommended-list').innerHTML = videoData.series.slice(0, 6).map(item => createVideoCard(item)).join('');
    
    // Auto-populate Continue Watching with some items if empty
    document.getElementById('continue-watching').innerHTML = videoData.movies.slice(6, 10).map(item => createVideoCard(item)).join('');
}

function renderHorizontalList(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(item => createVideoCard(item)).join('');
}

function createVideoCard(item) {
    const isSeries = !!item.epList;
    const info = isSeries ? `${item.episodes} Episodes` : item.duration;
    const playId = isSeries ? item.epList[0].id : item.id;
    
    // If it's a series, the main click opens the detail/episode list. 
    // If it's a movie, it plays directly.
    const clickAction = isSeries ? `openDetail('${item.id}', 'series')` : `playVideo('${item.title}', '${playId}')`;
    
    return `
        <div class="video-card" onclick="${clickAction}">
            <div class="poster-wrapper">
                <img src="${item.poster}" alt="${item.title}" class="poster-img">
                <div class="play-overlay">
                    <i class="fa-solid fa-circle-play"></i>
                </div>
                <div class="info-icon" onclick="event.stopPropagation(); openDetail('${item.id}', '${isSeries ? 'series' : 'movies'}')">
                    <i class="fa-solid fa-circle-info"></i>
                </div>
            </div>
            <div class="card-title">${item.title}</div>
            <div class="card-info">${info}</div>
        </div>
    `;
}

function renderMovies() {
    const container = document.getElementById('movies-grid');
    container.innerHTML = videoData.movies.map(movie => createVideoCard(movie)).join('');
}

function renderSeries() {
    const container = document.getElementById('series-grid');
    container.innerHTML = videoData.series.map(series => createVideoCard(series)).join('');
}

function openDetail(id, type) {
    const item = videoData[type].find(x => x.id === id);
    if (!item) return;

    const detailBody = document.getElementById('detail-body');
    const isSeries = !!item.epList;
    const playId = isSeries ? item.epList[0].id : item.id;

    let content = `
        <div class="detail-header">
            <div class="back-btn" onclick="switchScreen('${prevScreen}')">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <img src="${item.banner || item.poster}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
            <div class="hero-overlay"></div>
        </div>
        <div class="detail-content">
            <div class="detail-title">${item.title}</div>
            <div class="detail-meta-row">
                <span>${isSeries ? item.episodes + ' Episodes' : item.year}</span>
                <span>•</span>
                <span>${item.genre}</span>
            </div>
            <div class="hero-btns" style="margin-bottom: 25px;">
                <button class="btn btn-primary" style="flex: 1; justify-content: center;" onclick="playVideo('${item.title}', '${playId}')">
                    <i class="fa-solid fa-play"></i> Watch Now
                </button>
            </div>
            <div class="detail-desc" style="color: var(--text-secondary);">${item.desc}</div>
            
            ${type === 'series' ? `
                <div class="episodes-section">
                    <div class="section-header" style="padding-right: 0;">
                        <div class="section-title" style="color: var(--text-primary);">Episodes</div>
                    </div>
                    <div id="episode-list">
                        ${item.epList.map((ep, idx) => `
                            <div class="episode-card" onclick="playVideo('${ep.title}', '${ep.id}')">
                                <div class="ep-number">${idx + 1}</div>
                                <div class="ep-thumb-container">
                                    <img src="${item.poster}" class="ep-thumb">
                                    <div class="ep-play-overlay"><i class="fa-solid fa-play"></i></div>
                                </div>
                                <div class="ep-details">
                                    <div class="ep-header-row">
                                        <div class="ep-title">${ep.title}</div>
                                        <div class="ep-duration">${ep.duration}</div>
                                    </div>
                                    <div class="ep-desc">${item.desc.substring(0, 80)}...</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : `
                <div class="section" style="padding-left: 0; margin-top: 20px;">
                    <div class="section-header" style="padding-right: 0;">
                        <div class="section-title">Similar Content</div>
                    </div>
                    <div class="horizontal-scroll">
                        ${videoData.movies.filter(m => m.id !== item.id).slice(0, 5).map(m => createVideoCard(m)).join('')}
                    </div>
                </div>
            `}
        </div>
    `;

    detailBody.innerHTML = content;
    switchScreen('detail-screen');
}

function playVideo(title, id) {
    document.getElementById('player-title').innerText = title;
    const playerContainer = document.getElementById('video-player-container');
    const controls = document.getElementById('player-controls-overlay');
    
    // Reset controls visibility
    controls.style.opacity = '1';
    controls.style.pointerEvents = 'auto';
    
    // Clear and set new player
    playerContainer.innerHTML = `
        <iframe 
            src="https://drive.google.com/file/d/${id}/preview" 
            width="100%" 
            height="100%" 
            frameborder="0" 
            allow="autoplay; encrypted-media; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    switchScreen('player-screen');

    // Auto-hide controls after 3 seconds
    setTimeout(() => {
        controls.style.opacity = '0';
        controls.style.pointerEvents = 'none';
    }, 3000);

    // Show controls on tap
    playerContainer.onclick = () => {
        controls.style.opacity = '1';
        controls.style.pointerEvents = 'auto';
        setTimeout(() => {
            controls.style.opacity = '0';
            controls.style.pointerEvents = 'none';
        }, 3000);
    };
}
function backFromPlayer() {
    document.getElementById('video-player-container').innerHTML = '';
    switchScreen(prevScreen);
}


function renderDownloads() {
    const container = document.getElementById('downloads-container');
    const empty = document.getElementById('downloads-empty');
    empty.style.display = 'flex';
}

function quickSearch(query) {
    const searchInput = document.querySelector('.search-box input');
    searchInput.value = query;
    switchScreen('search-screen');
    handleSearch(query);
}

function filterByGenre(genre) {
    // This could either update the current grid or jump to search
    quickSearch(genre);
}

function handleSearch(query) {
    const container = document.getElementById('search-results');
    if (!query) {
        container.innerHTML = '';
        return;
    }
    
    const results = [...videoData.movies, ...videoData.series].filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.genre.toLowerCase().includes(query.toLowerCase())
    );
    
    container.innerHTML = results.map(item => createVideoCard(item)).join('');
}

// Add event listener for real-time search
document.querySelector('.search-box input')?.addEventListener('input', (e) => {
    handleSearch(e.target.value);
});

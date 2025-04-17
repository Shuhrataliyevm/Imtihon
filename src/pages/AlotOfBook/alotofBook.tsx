import "../../styles/alotofbook.scss";

const AlotofBook = () => {
    return (
        <div className="alotofBook">
            <div className="alotofBook__data">
                <h4>Eng ko‘p qidirilgan kitoblar</h4>
                <p>Foydalanuvchilar tomonidan eng ko‘p qidirilgan kitoblar</p>
            </div>

            <div className="alotofBook__btn">
                <button onClick={() => window.location.href = "/librarydetail"}>
                    <img src="/icons/book.svg" alt="book" />
                    Barcha kitoblar
                </button>
            </div>

            <div className="alotofBook__carousel-wrapper">
                <button className="alotofBook__control prev" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    &lt;
                </button>

                <div id="carouselExampleDark" className="carousel slide alotofBook__carousel" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="4000">
                            <img src="/images/otgan kunlar.jpg" alt="Slide 1" />
                            <div className="carousel-caption">
                                <h5>Otgan kunlar</h5>
                                <p>Abdulla Qodiriyning o‘zbek adabiyotida ilk tarixiy romani hisoblanadi. Asar XIX asr o‘zbek jamiyatidagi ijtimoiy muammolar, muhabbat va fojia haqida hikoya qiladi. Unda Otabek va Kumushning sevgi sarguzashtlari tarixiy zamin bilan uyg‘unlashgan holda bayon qilinadi.</p>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="4000">
                            <img src="/images/mehrobdan chayon.jpg" alt="Slide 2" />
                            <div className="carousel-caption">
                                <h5>Mehrobdan chayon</h5>
                                <p>Hamid Olimjonning dramatik qissasidir. Asar sevgi, fidoyilik va jamiyatdagi adolatsizlik mavzulariga bag‘ishlangan bo‘lib, unda bosh qahramonlar orasidagi ruhiy kurash, ijtimoiy to‘qnashuvlar yoritilgan.</p>
                            </div>
                        </div>

                        <div className="carousel-item" data-bs-interval="4000">
                            <img src="/images/jinlar bazmi.jpg" alt="Slide 3" />
                            <div className="carousel-caption">
                                <h5>Jinlar bazmi</h5>
                                <p>Xurshid Do‘stmuhammadning mashhur asari bo‘lib, zamonaviy o‘zbek adabiyotida o‘ziga xos uslubda yozilgan falsafiy va ijtimoiy asarlardan biridir. Unda jamiyatdagi illatlar, insoniylik va ma’naviyat masalalari o‘tkir satira va ramziy obrazlar orqali ochib berilgan.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <button style={{position: "relative", left:"-10px"}} className="alotofBook__control next" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default AlotofBook;

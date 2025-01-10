import React from 'react'

function Contackme() {
    return (
        <div>
            <div>
                <h1>Bana Ulaşın</h1>
                <div>
                    <form>
                        <input type="text" placeholder="Ad Soyad" />
                        <input type="email" placeholder="E-posta Adresiniz" />
                        <textarea placeholder="Mesajınız" rows="5" cols="30"></textarea>
                        <button type="submit">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contackme

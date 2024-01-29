import "../styles/footer.css"
export default function Footer() {
    const curHour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = curHour > openHour && curHour < closeHour ? true : false;
    return (
        <footer className="footer">
            <div className="order">
                {isOpen? 
                ( 
                <>
                    <p>We'r open untill {closeHour}:00, come visit us or order online.</p>
                </>
                ):
                (
                <p>We will happely serve your between {openHour}:00 and {closeHour}:00</p>
                )}
            </div>
      </footer>
    );
      
  }
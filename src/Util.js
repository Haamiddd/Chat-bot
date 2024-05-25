import img4 from './images/angry.gif'

let greetingCount = 0;
let invalidInputCount = 0;

export const analyze = (text) => {
    if (text.toLocaleLowerCase().includes('hi') || text.toLocaleLowerCase().includes('hai') || text.toLocaleLowerCase().includes('hello')) {
        greetingCount++;
        if (greetingCount >= 3) {
            return ( <div>
                <div><img src={img4} alt="angry" className="img-angry" /></div>
                <div><h4 >Please ask propper questions</h4></div>

            </div>) ;
        }
        return (
            <p>
                <h5>Welcome to Collins College, I can help you with these:</h5>
                <ul>
                    <li>Our Branches</li>
                    <li>Contact Details</li>
                    <li>Courses Available</li>
                    <li>Payment details</li>
                </ul>
            </p>
        );
    } else if (text.toLocaleLowerCase().includes('course') || text.toLocaleLowerCase().includes('courses') || text.toLocaleLowerCase().includes('cour')) {
        return (
            <p>
                <h5>Courses we offer at Collins College</h5>
                <ul>
                    <li>HND in Computing</li>
                    <li>HND in Networking</li>
                    <li>HND in Business Management</li>
                    <li>Topup - (Software/Networking)</li>
                    <li>Topup - Business Management</li>
                </ul>
            </p>
        );
    } else if (text.toLocaleLowerCase().includes('branches') || text.toLocaleLowerCase().includes('bran') || text.toLocaleLowerCase().includes('branch')) {
        return (
            <p>
                <h5>We have Five branches across Sri Lanka</h5>
                <ul>
                    <li>Colombo</li>
                    <li>Kandy</li>
                    <li>Jaffna</li>
                    <li>Galle</li>
                    <li>Puttlam</li>
                </ul>
            </p>
        );
    } else if (text.toLocaleLowerCase().includes('contacts') || text.toLocaleLowerCase().includes('number') || text.toLocaleLowerCase().includes('phone') || text.toLocaleLowerCase().includes('telephone')) {
        return (
            <p>
                <h5>Our contact details</h5>
                <ul>
                    <li>Colombo - +94 114 223 224</li>
                    <li>Kandy - +94 114 223 224</li>
                    <li>Jaffna - +94 114 223 224</li>
                    <li>Galle - +94 114 223 224</li>
                    <li>Puttlam - +94 114 223 224</li>
                </ul>
            </p>
        );
    } else if (text.toLocaleLowerCase().includes('packages') || text.toLocaleLowerCase().includes('prices') || text.toLocaleLowerCase().includes('payments')||text.toLocaleLowerCase().includes('price')) {
        return (
            <p>
                <h5>Payment plans</h5>
                <ul>
                    <li>HND in Computing Lkr - 100,000/=</li>
                    <li>HND in Networking Lkr - 100,000/=</li>
                    <li>HND in Business Management Lkr - 100,000/=</li>
                    <li>Topup - (Software/Networking) Lkr - 150,000/=</li>
                    <li>Topup - Business Management Lkr - 120,000/=</li>
                </ul>
            </p>
        );
    }

    invalidInputCount++;

    if (invalidInputCount >= 3) {
        return (
            <div>
                <div><img src={img4} alt="angry" className="img-angry" /></div>
                <div><h4 >Please ask propper questions</h4></div>
            </div>
        );
    }

    return "Sorry I couldn't understand, Please try again 😊";
};

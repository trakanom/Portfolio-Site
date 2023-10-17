// src/components/ConsentBanner.js

function ConsentBanner({ onAccept, onDecline }) {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
            <p>We use cookies to analyze website traffic. Do you consent to our use of cookies for this purpose?</p>
            <div>
                <button onClick={onAccept} className="mr-2 px-4 py-2 bg-green-500 hover:bg-green-600">Accept</button>
                <button onClick={onDecline} className="px-4 py-2 bg-red-500 hover:bg-red-600">Decline</button>
            </div>
        </div>
    );
}

export default ConsentBanner;
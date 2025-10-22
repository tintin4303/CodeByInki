// Footer.js
export default function Footer() {
    return (
        <footer className="flex justify-center m-5">
            <div className="flex justify-center items-center h-7 w-fit p-5">
                <p>© {new Date().getFullYear()} CodeByInki.</p>
            </div>
        </footer>
    );
}

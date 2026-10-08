import Link from 'next/link';


const NotFound = () => {
    return (
        <div>
             <main className="min-h-screen bg-base-200 flex items-center justify-center p-6">
            <div className="text-center max-w-lg">

                {/* 404 */}
                <div className="mb-6">
                    <h1 className="text-9xl font-black text-primary">
                        404
                    </h1>
                </div>

                {/* Message */}
                <h2 className="text-3xl font-bold">
                    Page Not Found
                </h2>

                <p className="mt-3 text-base-content/60">
                    Sorry, we couldn't find the page you're looking for.
                    It may have been moved, deleted, or the URL might be incorrect.
                </p>

                {/* Actions */}
                <div className="mt-8 flex justify-center gap-3">
                    <Link
                        href="/"
                        className="btn btn-primary"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="btn btn-outline"
                    >
                        Go Back
                    </button>
                </div>

            </div>
        </main>
        </div>
    );
};

export default NotFound
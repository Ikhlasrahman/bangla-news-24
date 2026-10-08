"use client";

const LoadingPage = () => {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">

                <span className="loading loading-spinner loading-lg text-primary"></span>

                <div className="text-center">
                    <h2 className="text-lg font-semibold">
                        Loading...
                    </h2>

                    <p className="text-sm text-base-content/60">
                        Please wait while we load your page.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default LoadingPage;
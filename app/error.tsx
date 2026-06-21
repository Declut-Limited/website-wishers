"use client";

export default function Error({ error }: { error: Error }) {
	return (
        <div className="error_container">
            <h4 className="error_heading" style={{ fontSize: "2.8rem" }}>Oops! Something went wrong.</h4>
            <p className="error_text">{error.message}</p>
            <button onClick={() => window.location.reload()}>Reset</button>
        </div>
    );
}
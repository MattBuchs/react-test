function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3];
    const scaleType = careType === "light" ? "☀️" : "💧";

    return (
        <div>
            {range.map((elt) =>
                scaleValue >= elt ? (
                    <span key={elt.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    );
}

export default CareScale;

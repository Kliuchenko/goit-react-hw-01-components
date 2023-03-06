import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    };

    return (
        <section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            <ul className="stat-list">
                {stats.map(data => (
                    <li
                    className="stats-item"
                    key={data.id}
                    style={{ backgroundColor: getRandomColor() }}>
                        <span className="stats-label">{data.label} </span>
                        <span className="percentage">{data.percentage}%</span>
                    </li>
                ))}
                </ul>
            </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};
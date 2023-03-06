export const TransactionHistory = ({ items }) => {;

    return (
        <table className="transaction-history">
            <thead className="table-header">
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className="table-body">
                {items.map((item) => {
                    const { id, type, amount, currency } = item
                    return (
                        <tr className="table-row" key={id}>
                            <td>{ type }</td>
                            <td>{ amount }</td>
                            <td>{ currency }</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
import React from "react";
import {Card} from "react-bootstrap";

function JournalMetrics() {
    return (
        <table className="table fs-14">
            <tr>
                <td>Acceptance rate</td>
                <th>26%</th>
            </tr>
            <tr>
                <td>Submission to final decision</td>
                <th>76 days</th>
            </tr>
            <tr>
                <td>Acceptance to publication</td>
                <th>12 days</th>
            </tr>
            <tr>
                <td>CiteScore</td>
                <th>5.000</th>
            </tr>
            <tr>
                <td>Journal Citation Indicator</td>
                <th>0.600</th>
            </tr>
            <tr>
                <td>Impact Factor</td>
                <th>3.246</th>
            </tr>
        </table>

    )
}

export default JournalMetrics;
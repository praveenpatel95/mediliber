import React from "react";

function JournalMetrics({journal}) {
    return (
        <table className="table fs-14 mb-0">
            <tr>
                <td>Acceptance rate</td>
                <th>{journal?.acceptance_rate ? journal?.acceptance_rate+"%" : '-'}</th>
            </tr>
            <tr>
                <td>Submission to final decision</td>
                <th>{journal?.submission_final_decision ? journal?.submission_final_decision+" days" :'-'}</th>
            </tr>
            <tr>
                <td>Acceptance to publication</td>
                <th>{journal?.acceptance_publication ? journal?.acceptance_publication+" days" :'-'}</th>
            </tr>
            <tr>
                <td>CiteScore</td>
                <th>{journal?.citi_score ? journal?.citi_score :'-'}</th>
            </tr>
            <tr>
                <td>Journal Citation Indicator</td>
                <th>{journal?.citation_indicator ? journal?.citation_indicator :'-'}</th>
            </tr>
            <tr>
                <td>Impact Factor</td>
                <th>{journal?.impact_factor ? journal?.impact_factor :'-'}</th>
            </tr>
        </table>

    )
}

export default JournalMetrics;
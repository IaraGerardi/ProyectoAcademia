import React from "react";
import "./call-events.css"
import Delete from "./img/delete.svg"



function CallEvents() {






    return (
        // TABLA DE EVENTOS
        <>
            <div className="table-events">
                <div className="container-events">

                    <table >
                        <tr className="title-table">
                            <td className="title-events"><strong>Fecha</strong></td>
                            <td className="title-events"><strong>Horario</strong></td>
                            <td className="title-events"><strong>Eventos</strong></td>
                            <td className="title-events"><strong>Participantes</strong></td>
                        </tr>

                        <tr>
                            <td className="events">28/09/2022</td>
                            <td className="events">19:30hs</td>
                            <td className="events">Evento grupal</td>
                            <td className="events">Maximiliano Ivan Portel Beraud </td>
                            <td className="events left"><img className="icon-delete" src={Delete} alt="icon de tacho de basura" /></td>
                        </tr>
                        <tr>
                            <td className="events">28/09/2022</td>
                            <td className="events">19:30hs</td>
                            <td className="events">Evento grupal</td>
                            <td className="events">Avila Sebastian</td>
                            <td className="events left"><img className="icon-delete" src={Delete} alt="icon de tacho de basura" /></td>
                        </tr>
                        <tr>
                            <td className="events">28/09/2022</td>
                            <td className="events">19:30hs</td>
                            <td className="events">Evento grupal</td>
                            <td className="events">Avila Sebastian</td>
                            <td className="events left"><img className="icon-delete" src={Delete} alt="icon de tacho de basura" /></td>
                        </tr>
                        <tr>
                            <td className="events">28/09/2022</td>
                            <td className="events">19:30hs</td>
                            <td className="events">Evento grupal</td>
                            <td className="events">Avila Sebastian</td>
                            <td className="events left"><img className="icon-delete" src={Delete} alt="icon de tacho de basura" /></td>
                        </tr>
                        <tr>
                            <td className="events">28/09/2022</td>
                            <td className="events">19:30hs</td>
                            <td className="events">Evento grupal</td>
                            <td className="events">Avila Sebastian</td>
                            <td className="events left"><img className="icon-delete" src={Delete} alt="icon de tacho de basura" /></td>
                        </tr>

                        <tr>
                            <td className="events">28/09/2022</td>
                            <td className="events">19:30hs</td>
                            <td className="events">Evento grupal</td>
                            <td className="events">Avila Sebastian</td>
                            <td className="events left"><img className="icon-delete" src={Delete} alt="icon de tacho de basura" /></td>
                        </tr>

                        <tr>
                            <td className="events">28/09/2022</td>
                            <td className="events">19:30hs</td>
                            <td className="events">Evento grupal</td>
                            <td className="events">Avila Sebastian</td>
                            <td className="events left"><img className="icon-delete" src={Delete} alt="icon de tacho de basura" /></td>
                        </tr>
                        <tr>
                            <td className="events">28/09/2022</td>
                            <td className="events">19:30hs</td>
                            <td className="events">Evento grupal</td>
                            <td className="events">Avila Sebastian</td>
                            <td className="events left"><img className="icon-delete" src={Delete} alt="icon de tacho de basura" /></td>
                        </tr>

                    </table>
                </div>

            </div>



        </>
    )
}

export default CallEvents;
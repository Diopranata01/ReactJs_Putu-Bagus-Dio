import "./Home.css"
import React from 'react'
const ListItem = (props) => {

    const { id, nama, umur, jenis_kelamin } = props.data

    const { detailPengunjung } = props;

    return (
        // <tr>
        //     <td>{nama}</td>
        //     <td>{umur}</td>
        //     <td>{jenisKelamin}</td>
        //     <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td>
        // </tr>

                    <React.Fragment key={id}>
                        <tr>
                            <td>{nama}</td>
                            <td>{umur}</td>
                            <td>{jenis_kelamin}</td>
                            <td className="removeBorder" onClick={() =>detailPengunjung(id, props.data)}><button>Detail</button></td>
                        </tr>
                    </React.Fragment>
    )
}

export default ListItem;
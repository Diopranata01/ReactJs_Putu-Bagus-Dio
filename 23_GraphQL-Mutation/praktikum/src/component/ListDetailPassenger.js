import React from 'react'

const ListDetailPassenger = (props) => {
    
    const { id, nama, umur, jenis_kelamin } = props.data;

    // const { data, loading, error  } = useQuery(getListPassenger);
    
    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;

    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Id</td>
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                    <td>{id}</td>
                    <td>{nama}</td>
                    <td>{umur}</td>
                    <td>{jenis_kelamin}</td>
                    <td bgcolor="white" className="removeBorder"></td>
            </table>
        </div>
    )
  }

export default ListDetailPassenger;
import React from 'react'
import ListItem from './ListItem';
import { useQuery } from '@apollo/client';
import { useState } from 'react'
import ListDetailPassenger from './ListDetailPassenger';

const ListPassenger = (props) => {
    
    const { hapusPengunjung, detailPengunjung, getListPassenger, dataDetail } = props;

    const { data, loading, error  } = useQuery(getListPassenger);

    // const [loadingBar, setLoading] = useState('');
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(dataDetail)

    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                
                {data?.passenger_list_passenger.map((item) => (

                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={hapusPengunjung}
                        detailPengunjung={detailPengunjung}
                    />
                    // <React.Fragment key={item.id}>
                    //     <td>{item.nama}</td>
                    //     <td>{item.umur}</td>
                    //     <td>{item.jenis_kelamin}</td>
                    //     <td className="removeBorder" onClick={() =>hapusPengunjung(item.id)}><button>Hapus</button></td>
                    // </React.Fragment>
                ))}

                {dataDetail.map( item => (
                    <ListDetailPassenger
                       style={{ margin: '10px' }}
                        key={item.id}
                        data={item}
                    />
                ))}
                
            </table>
        </div>
    )
  }

export default ListPassenger;
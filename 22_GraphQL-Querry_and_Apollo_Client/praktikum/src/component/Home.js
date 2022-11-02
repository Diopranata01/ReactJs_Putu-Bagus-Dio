import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { gql } from '@apollo/client';

const GetListpassenger = gql`
    query MyQuery {
        passenger_list_passenger {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`;

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data : [
                {
                    id: '',
                    nama: '',
                    umur: '',
                    jenisKelamin: ''
                },
            ],
            detail : [
                {
                    tampilDetail: false
                }
            ]
        }
    }
    
    hapusPengunjung = id => {
        this.setState({    
            data: [      
                ...this.state.data.filter(item => {        
                    return item.id !== id;      
                })    
            ]  
        });
    };

    detailPengunjung = (id, props) => {
        
        console.log(props);
        
        const newData ={
            ...props,
        };
        
        this.setState({    
            data: [...this.state.data, newData]  
        });

        // if(newData !== ''){
            
        //     const newDetail = {tampilDetail: true}

        //     this.setState({
        //         detail: [ ...this.state.detail, newDetail]
        //     })
        // }
        // console.log(this.state.detail);
        
    };
    
    tambahPengunjung = newUser => {
        const newData = {
            id: uuidv4(),
            ...newUser
        }; 
        this.setState({    
            data: [...this.state.data, newData]  
        });
    };
    
    render() {
        return (
            <div>
                <Header/>
                <ListPassenger 
                    getListPassenger={GetListpassenger}
                    // data={this.state.data}
                    detailPengunjung={this.detailPengunjung}
                    hapusPengunjung={this.hapusPengunjung}
                    dataDetail={this.state.data}
                />
                <PassengerInput
                    tambahPengunjung={this.tambahPengunjung}
                />

                {/* <React.Fragment key={id}>
                    <tr>
                        <td>{nama}</td>
                        <td>{umur}</td>
                        <td>{jenis_kelamin}</td>
                        <td className="removeBorder" onClick={() =>hapusPengunjung(id)}><button>Detail</button></td>
                    </tr>
                </React.Fragment> */}
            </div>
        )
    }
}

export default Home;
import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import { Rooms } from "../types";

export default function Detail() {
    const { id } = useParams();
    const rooms: Rooms[] = [
    {
        id: "1",
        roomName: 'Room 1',
        bedAmount: 3,
        checkinDate: '11/12',
        checkoutDate: '16/12',
        roomType: 'Standard',
        serviceCount: 2,
        service: ['Hư ống nước', 'Hư máy lạnh']
    },
    {
        id: "2",
        roomName: 'Room 3',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'Standard',
        serviceCount: 0,
    },
    {
        id: "3",
        roomName: 'Room 4',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'Standard',
        serviceCount: 0,
    },
    {
        id: "4",
        roomName: 'Room 5',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'Standard',
        serviceCount: 0,
    },
    {
        id: "5",
        roomName: 'Room 4',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'Standard',
        serviceCount: 0,
    },



    {
        id: "6",
        roomName: 'Room 1',
        bedAmount: 3,
        checkinDate: '18/12',
        checkoutDate: '20/12',
        roomType: 'Double',
        serviceCount: 0,
    },
    {
        id: "7",
        roomName: 'Room 2',
        bedAmount: 3,
        checkinDate: '18/12',
        checkoutDate: '20/12',
        roomType: 'Double',
        serviceCount: 0,
    },
    {
        id: "8",
        roomName: 'Room 3',
        bedAmount: 3,
        checkinDate: '18/12',
        checkoutDate: '20/12',
        roomType: 'Double',
        serviceCount: 0,
    },
    {
        id: "9",
        roomName: 'Room 4',
        bedAmount: 3,
        checkinDate: '18/12',
        checkoutDate: '20/12',
        roomType: 'Double',
        serviceCount: 0,
    },
    {
        id: "10",
        roomName: 'Room 5',
        bedAmount: 3,
        checkinDate: '18/12',
        checkoutDate: '20/12',
        roomType: 'Double',
        serviceCount: 0,
    },
    {
        id: "11",
        roomName: 'Room 1',
        bedAmount: 3,
        checkinDate: '18/12',
        checkoutDate: '20/12',
        roomType: 'King',
        serviceCount: 0,
    },

    {
        id: "12",
        roomName: 'Room 2',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'King',
        serviceCount: 3,
        service: ['Hư chân giường', 'Thiếu nước uống', 'Máy lạnh bị chảy nước']
    },
    {
        id: "13",
        roomName: 'Room 3',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'King',
        serviceCount: 3,
        service: ['Hư chân giường', 'Thiếu nước uống', 'Máy lạnh bị chảy nước']
    },
    {
        id: "14",
        roomName: 'Room 4',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'King',
        serviceCount: 3,
        service: ['Hư chân giường', 'Thiếu nước uống', 'Máy lạnh bị chảy nước']
    },
    {
        id: "15",
        roomName: 'Room 5',
        bedAmount: 3,
        checkinDate: '12/12',
        checkoutDate: '16/12',
        roomType: 'King',
        serviceCount: 3,
        service: ['Hư chân giường', 'Thiếu nước uống', 'Máy lạnh bị chảy nước']
    },
   
]
    const getRoom = rooms.find(room => room.id === id);
    return (
        <Row>
            <Col className="heading">
                <h2>Rooms Detail</h2>
            </Col>
            <Col><img src="" alt="" /></Col>
            <Col span={24} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', fontSize: 20 }}>
                <p>ID: {getRoom?.id}</p>
                <p>Room Name: {getRoom?.roomName} </p>
                <p>Bed Amount: {getRoom?.bedAmount}</p>
                <p>Checkin Day: {getRoom?.checkinDate}</p>
                <p>Checkout Day: {getRoom?.checkoutDate}</p>
                <p>Room Type: {getRoom?.roomType}</p>
            </Col>
        </Row>
    )
}
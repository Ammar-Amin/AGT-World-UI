import React, { useState } from 'react'
import BodyHead from './BodyHead'
import BodyElem1 from './BodyElem1'
import BodyElem2 from './BodyElem2'
import LastElem from './LastElem'
import Group from './Group'

export default function Body() {
    const [groupJoined, setGroupJoined] = useState(false);

    return (
        <div >
            <BodyHead groupJoined={groupJoined} setGroupJoined={setGroupJoined} />
            <div className='bodyitems w-[70%] m-auto flex justify-between'>
                <div>
                    <BodyElem1 img={'https://images.unsplash.com/photo-1668545813197-d68b020261dc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} work={"Article"} title={"What if famous brands had regular fonts? Meet RegulaBrands!"} name={'Sarthak Kamra'} profile={'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

                    <BodyElem1 img={'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} work={"Education"} title={"Tax Benefits for Investment under National Pension Scheme launched by Government"} name={'Sarah West'} profile={'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

                    <BodyElem2 img={'https://images.unsplash.com/photo-1559132837-f5007d4fb2fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} work={"Meetup"} title={"Finance & Investment Elite Social Mixer @Lujiazui"} name={'Ronam Jones'} profile={'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />

                    <LastElem work={"Job"} title={"Software Developer"} name={'Joseph Gray'} profile={'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                </div>
                <div>
                    <Group groupJoined={groupJoined} />
                </div>
            </div>

        </div>
    )
}

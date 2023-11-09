import './WarehouseDetails.scss';


function WarehouseDetails({warehouseInfo}){
    
    return(
        // <Header/>
        
        <section className='war-details'>

            <section>
                <h1 className=''>{}</h1>
            </section>

            <section className=''>
                
                <section className=''>
                    <p className=''>By {}</p>
                    <p className=''>{new Date().toLocaleDateString()}</p>
                </section>
                <section className=''>
                    <div className=''>
                        <img className='' src={} alt="icon"/>
                        <p className=''>{}</p>
                    </div>
                    <div className=''>
                        <img className='' src={} alt="icon"/>
                        <p className=''>{}</p>
                    </div>
                </section>

            </section>

            <section>
                <p className='info__description'>{}</p>
            </section>
        </section>
    )
}

export default VideoDetails;
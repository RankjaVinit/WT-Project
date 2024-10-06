


function SalesList({ arrayList, openDialog }){
     
    let sales = '';

    let totalSalesAmount = 0;
    let totalPurchaseAmount = 0;

    if(arrayList === undefined || arrayList.length === 0){
        sales = (
            <div className="row list-group text-center list-group-horizontal mb-2">
                <div className="col-12 p-2">No Data</div>
            </div>
        );
    }
    else{
        sales = arrayList.map( (sales, index) => {

            let currentSalesAmount = 0;
            let currentPurchaseAmount = 0;

            let totalLoss = 0;

            let list = sales.allSales.map( (sale, index) => {
                currentPurchaseAmount += sale.purchaseAmount;
                currentSalesAmount += sale.salesAmount;
                let isProfit = ( sale.salesAmount - sale.purchaseAmount >= 0 );
                if( !isProfit ) totalLoss++;
                return(
                    <li  key={index} className="list-group-ite ps-3 pe-3 p-1">
                        <div className={`row list-group text-center list-group-horizontal border ${isProfit ? 'border-success text-success' : 'border-danger text-danger'}`}>
                            <div className="col-3 p-2"> {sale.time} </div>
                            <div className="col-3 p-2"> {sale.salesAmount} </div>
                            <div className="col-3 p-2"> {sale.purchaseAmount} </div>
                            <div className="col-3 p-2"> {sale.salesAmount - sale.purchaseAmount} </div>
                        </div>
                    </li>
                );
            } )

            let isProfitAtDay = ( currentSalesAmount - currentPurchaseAmount >= 0 );

            totalPurchaseAmount += currentPurchaseAmount;
            totalSalesAmount += currentSalesAmount;
            return(
                <>
                <ul key={index} className="list-group">
                    <li>

                        {/* <!-- Toggle for collapse --> */}
                        <a 
                            data-bs-toggle="collapse" 
                            href={`#${index}`} 
                            role="button" 
                            aria-expanded="false"
                            className="text-decoration-none"    
                        >

                            <div 
                                className={`ps-3 pe-3 my-1 d-flex align-items-center position-relative btn row text-center border rounded ${isProfitAtDay ? 'border-success btn-outline-success' : 'border-danger btn-outline-danger'}`}
                            >
                                <div className="col-3 "> {sales.date} </div>
                                <div className="col-3 "> {currentSalesAmount} </div>
                                <div className="col-3 "> {currentPurchaseAmount} </div>
                                <div className="col-3 "> {currentSalesAmount - currentPurchaseAmount} </div>
                                {
                                    ( totalLoss > 0 ) &&
                                    (
                                        <span 
                                            className="position-absolute border border-danger w-auto px-1 rounded-pill"
                                            style={{
                                                fontSize: "0.55rem"
                                            }}
                                        > {totalLoss} </span>
                                    )
                                }
                            </div>

                        </a>

                        {/* <!-- Collapsible Nested List --> */}
                        <div className="collapse" id={index}>
                            <ul className="list-group">
                               {list}
                            </ul>
                        </div>

                    </li>
                </ul>

                <hr 
                    className="bg-secondary"
                    style={{ 
                        margin: "6px 0", 
                        height: "1px", 
                        border: "none",
                        width: "100%" 
                    }}
                />
                </>
            );
        } ); 
    }

    let isProfit = ( totalSalesAmount - totalPurchaseAmount >= 0 );
    
    return(
        <>
            <div className='container pt-5' style={{ height: '100%',  width: '100%', position: 'relative'}}>
            
                <div className="mt-4 ps-3 pe-3 row list-group text-center list-group-horizontal border border-dark text-dark">
                    <div className="col-3 p-2"> Date </div>
                    <div className="col-3 p-2"> Sales Amount </div>
                    <div className="col-3 p-2"> Purchase Amount </div>
                    <div className="col-3 p-2"> Profit / Loss </div>
                </div>

                <div className="row pt-2 pb-5" style={{height: '85%', overflowY: 'scroll', scrollbarWidth: 'none'}}>
                    <div className="col-12">
                        {sales}
                    </div>
                </div>

                <div className={`ps-3 pe-3 row list-group text-center bg-white list-group-horizontal mb-2 text-white`} style={footerStyle}>
                    <div className="col-3"> 
                        <button className="btn btn-outline-success rounded border-2 h-100 float-start" 
                            style={{ width: '100%' }} onClick={openDialog}> Add </button>    
                    </div>
                    <div className="col-9">
                        <div className={`row rounded ${isProfit ? 'bg-success' : 'bg-danger'}`}>
                            <div className="col-4 p-2"> {totalSalesAmount} </div>
                            <div className="col-4 p-2"> {totalPurchaseAmount} </div>
                            <div className="col-4 p-2"> {totalSalesAmount - totalPurchaseAmount} </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    );

}


const footerStyle = {
    position: 'absolute',
    bottom: '10px',
    width: '100%'
}


export default SalesList;
import "./Categories.css"
import CatergoryCardMain from "./CategoriesCards/CatergoryCardMain"



function Categories() {
  return (
    <div>
      
 <div className="today">
        <span className="soild-block"></span>
        <span>Categories</span>
        <div className="flash-sale-txt " style={{margin:"20px 0"}}>
            <h2 style={{color:"black"}}>Browse By Category</h2>
        </div>
      </div>

<CatergoryCardMain/>
    
      


    </div>
  )
}

export default Categories

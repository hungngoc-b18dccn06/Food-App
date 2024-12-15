import './ExploreMenu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategiory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>
                Craving delicious flavors? Satisfy your taste buds at Hung Food! From fresh ingredients to mouth-watering dishes, we bring you the best of culinary delights. Visit us today and experience the joy of great food!
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div 
                        onClick={() => setCategiory(prev => prev === item.menu_name ? 'all' : item.menu_name)} 
                        key={index} 
                        className="explore-menu-list-item"
                    >
                        <div className="image-container">
                            <img className={category === item.menu_name ? "active" : "" } src={item.menu_image} alt='' />
                        </div>
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
}

export default ExploreMenu;

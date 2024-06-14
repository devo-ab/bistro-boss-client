import PropTypes from 'prop-types';

const MenuItems = ({item}) => {

    const { name, image, price, recipe } = item;

    return (
        <div className='flex space-x-5'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[118px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}-----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-400'>${price}</p>
        </div>
    );
};

MenuItems.propTypes = {
    item: PropTypes.object.isRequired
};

export default MenuItems;
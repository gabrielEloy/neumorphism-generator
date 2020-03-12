import { lightenDarkenColor } from './colorHelpers';
import SHAPES from '../constants/shape';

export const generateBackground = (color, shape) => {
    switch(shape){
        case SHAPES.CONCAVE:
            return `linear-gradient(145deg, ${lightenDarkenColor(color, -4)}, ${lightenDarkenColor(color, 6)})`;
        case SHAPES.CONVEX: 
            return `linear-gradient(145deg, ${lightenDarkenColor(color, 6)}, ${lightenDarkenColor(color, -4)})`;
        default:
            return color;
    }
}
import {similarAdds, createAddFragment} from './gen-similar-add';

document.querySelector('#map-canvas').appendChild(createAddFragment(similarAdds));

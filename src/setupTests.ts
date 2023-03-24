import * as Enzyme from 'enzyme'
// @ts-ignore
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })

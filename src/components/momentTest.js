import moment from 'moment'
import 'moment/locale/zh-cn';

export const testMoment = () => {
    moment.locale('zh-cn');
    let timeToEnd = moment().endOf('day').fromNow();
    console.log(`moment endof day from now ${timeToEnd}`);

}

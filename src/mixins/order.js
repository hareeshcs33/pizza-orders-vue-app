import { ordersList } from '../constants/order-data'

export default {
    data() {
        return {
            ordersList: []
        }
    },
    mounted() {
        setTimeout(() => {
            this.ordersList = ordersList;
        }, 200);
    },
}
<template>
  <div class="order">
    <table class="customers">
      <thead>
        <tr>
          <th>Serial No.</th>
          <th>Customer Name</th>
          <th>No. of Items Ordered</th>
          <th>Total amount of the Order</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.ordersList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.customerName }}</td>
          <td>{{ item.numberOfItems }}</td>
          <td>{{ item.totalAmount }}</td>
          <td>
            <span>{{item.orderStatus}}</span>
            <button class="status-btn" @click="changeOrderStatus(item)" :disabled="isDisabled(item.orderStatus)">Change Status</button>
          </td>
        </tr>
        <tr />
      </tbody>
    </table>
    <div class="status-update"></div>
  </div>
</template>
<script>
export default {
  props: ["ordersList"],
  data(){
      return {
        orderStatusList: [
            "Order Received",
            "Preparing",
            "Ready to serve"
        ]
      }
  },
  methods: {
    changeOrderStatus(order) {
        const ind = this.orderStatusList.findIndex(ref => ref === order.orderStatus);
        if(ind < (this.orderStatusList.length - 1)){
            order.orderStatus = this.orderStatusList[ind + 1];
        } else {
            console.log('status can not be updated.');
            return;
        }
        // update status to backend service
        const statusDiv = document.querySelector(".status-update");
        statusDiv.style.bottom = "0";
        statusDiv.innerHTML = `Order status updated to <strong>${order.orderStatus}</strong> for the order Id <strong>${order.id}</strong>`;
        console.log("Status updated", order);
        setTimeout(() => {
            statusDiv.style.bottom = "-50px";
        }, 5000);
    },
    isDisabled(item){
        // disable the change status if its last item in the reference list
        return item === this.orderStatusList[this.orderStatusList.length - 1];
    }
  }
};
</script>
<style scoped>
.order {
  width: 90%;
  margin: auto;
}

.customers {
  border-collapse: collapse;
  width: 100%;
}

.customers td,
.customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

.customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

.customers tr:hover {
  background-color: #ddd;
}

.customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #979a97;
  color: white;
}
.status-update {
  color: #fff;
  background-color: #38da38;
  position: fixed;
  left: 10px;
  bottom: -50px;
  width: 94%;
  border-radius: 5px 5px 0 0;
  padding: 15px 30px;
  transition: .5s;
}

.status-btn {
    font-weight: bold;
    float: right;
    border: 1px solid #000;
    transition: .3s;
}

.status-btn:hover {
    color: #fff;
    background-color: #08c177;
    border: 1px solid #08c177;
}

.status-btn[disabled] {
    color: rgba(16, 16, 16, 0.3);
    background: transparent;
    border: 1px solid grey;
}
</style>

export default {
    update_cart (state, data) {
        let flag = true; // id相
        state.cart_list = state.cart_list.map(v => {
            if (v.id === data.id) {
                ++v.count;
                flag = false;
            }
            return v;
        });
        if (flag) {
            state.cart_list.push(data);
        }
    },
    updated_checkbox (state, data) {
        var flag = true;
        state.cart_list[data.index].checkbox = data.checked;
        state.cart_list.forEach((item, index) => {
            if (!item.checkbox) {
                flag = false;
                return
            }
        });
        state.checkAll = flag;
    },
    updated_checkedAll (state) {
        state.checkAll = !state.checkAll;
        state.cart_list.map((item, index) => {
            item.checkbox = state.checkAll;
            return item;
        });
    },
    updated_num (state, data) {
        if (data.num < 1) {
            data.num = 1;
        }
        state.cart_list[data.index].count = data.num;
    },
    updated_sum (state) {
        state.sum = 0;
        state.cart_list.forEach((item, index) => {
            if (item.checkbox) {
                state.sum += item.count * item.price;
            }
        });
    }
};
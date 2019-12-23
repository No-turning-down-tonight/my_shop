import Vue from 'vue'
import { Button } from 'element-ui'
import { Form, FormItem, TableColumn, Dialog, MessageBox, Table, Tooltip, Input, Main, Header, Aside, Container, Card, Row, Col } from 'element-ui'
import { Message, Menu, Submenu, MenuItemGroup, Pagination, MenuItem, Switch, Breadcrumb, BreadcrumbItem } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(TableColumn)
Vue.use(Table)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

import Vue from 'vue'
import { Button, Select, Option } from 'element-ui'
import { Form, FormItem, TableColumn, Dialog, Tree, MessageBox, Table, Tag, Tooltip, Input, Main, Header, Aside, Container, Card, Row, Col } from 'element-ui'
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
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

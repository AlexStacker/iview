// Type definitions for iview 3.1.0
// Project: https://github.com/iview/iview
// Definitions by: yangdan
// Definitions: https://github.com/yangdan8/iview.git
import Vue,{ VNode } from 'vue';

export { Affix } from './affix';
export { Alert } from './alert';
export { Anchor, AnchorLink } from './anchor';
export { AutoComplete } from './auto-complete';
export { Avatar } from './avatar';
export { BackTop } from './back-top';
export { Badge } from './badge';
export { Breadcrumb, BreadcrumbItem } from './breadcrumb';
export { Button, ButtonGroup } from './button';
export { Card } from './card';
export { Carousel, CarouselItem } from './carousel';
export { Cascader } from './cascader';
export { Cell, CellGroup } from './cell';
export { Checkbox, CheckboxGroup } from './checkbox';
export { Circle, Circle as ICircle } from './circle';
export { Collapse, CollapsePanel } from './collapse';
export { ColorPicker } from './color-picker';
export { Content } from './content';
export { DatePicker } from './date-picker';
export { Divider } from './divider';
export { Drawer } from './drawer';
export { Dropdown, DropdownMenu, DropdownItem } from './dropdown';
export { Footer } from './footer';
export { Form, FormItem } from './form';
export { Header } from './header';
export { Icon } from './icon';
export { Input } from './input';
export { InputNumber } from './input-number';
export { Scroll } from './scroll';
export { Split } from './split';
export { Layout } from './layout';
export { LoadingBar } from './loading-bar';
export { Menu, MenuGroup, MenuItem, MenuSub } from './menu';
export { Message } from './message';
export { Modal } from './modal';
export { Notice } from './notice';
export { Page } from './page';
export { Poptip } from './poptip';
export { Progress } from './progress';
export { Radio, RadioGroup } from './radio';
export { Rate } from './rate';
export { Sider } from './sider';
export { Slider } from './slider';
export { Spin } from './spin';
export { Steps, StepsStep } from './steps';
export { Switch, Switch as ISwitch } from './switch';
export { Table } from './table';
export { Tabs, TabsPane } from './tabs';
export { Tag } from './tag';
export { Time } from './time';
export { Timeline, TimelineItem } from './timeline';
export { TimePicker } from './time-picker';
export { Tooltip } from './tooltip';
export { Transfer } from './transfer';
export { Tree } from './tree';
export { Upload } from './upload';
export { Row, Col } from './grid';
export { Select, Option, OptionGroup } from './select';

declare const API: {
    version: string;
    locale: (l) => void;
    i18n: (fn) => void;
    install: (
        Vue: Vue,
        opts: {
            locale?: any;
            i18n?: any;
            size?: any;
            transfer?: any;
        }
    ) => void;
    lang: (code: string) => void;
};

export default API;

declare module 'vue/types/vue' {
    interface Vue {
        $IVIEW: {
            size?: string;
            transfer?: string;
        };
    }
}

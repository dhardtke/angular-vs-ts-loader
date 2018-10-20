import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub413Component} from "./stub413.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub413Component
        }])
    ],
    declarations: [
        Stub413Component
    ]
})
export class Stub413Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub779Component} from "./stub779.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub779Component
        }])
    ],
    declarations: [
        Stub779Component
    ]
})
export class Stub779Module {

}

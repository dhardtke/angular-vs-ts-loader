import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub733Component} from "./stub733.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub733Component
        }])
    ],
    declarations: [
        Stub733Component
    ]
})
export class Stub733Module {

}

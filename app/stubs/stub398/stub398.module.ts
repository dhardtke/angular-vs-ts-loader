import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub398Component} from "./stub398.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub398Component
        }])
    ],
    declarations: [
        Stub398Component
    ]
})
export class Stub398Module {

}

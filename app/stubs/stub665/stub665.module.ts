import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub665Component} from "./stub665.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub665Component
        }])
    ],
    declarations: [
        Stub665Component
    ]
})
export class Stub665Module {

}

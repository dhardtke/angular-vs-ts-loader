import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub481Component} from "./stub481.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub481Component
        }])
    ],
    declarations: [
        Stub481Component
    ]
})
export class Stub481Module {

}

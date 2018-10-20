import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub389Component} from "./stub389.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub389Component
        }])
    ],
    declarations: [
        Stub389Component
    ]
})
export class Stub389Module {

}

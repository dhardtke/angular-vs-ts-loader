import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub777Component} from "./stub777.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub777Component
        }])
    ],
    declarations: [
        Stub777Component
    ]
})
export class Stub777Module {

}

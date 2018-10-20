import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub351Component} from "./stub351.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub351Component
        }])
    ],
    declarations: [
        Stub351Component
    ]
})
export class Stub351Module {

}

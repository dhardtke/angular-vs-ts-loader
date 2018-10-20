import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub106Component} from "./stub106.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub106Component
        }])
    ],
    declarations: [
        Stub106Component
    ]
})
export class Stub106Module {

}

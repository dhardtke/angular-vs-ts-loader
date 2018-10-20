import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub713Component} from "./stub713.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub713Component
        }])
    ],
    declarations: [
        Stub713Component
    ]
})
export class Stub713Module {

}

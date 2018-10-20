import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub300Component} from "./stub300.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub300Component
        }])
    ],
    declarations: [
        Stub300Component
    ]
})
export class Stub300Module {

}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub813Component} from "./stub813.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub813Component
        }])
    ],
    declarations: [
        Stub813Component
    ]
})
export class Stub813Module {

}
